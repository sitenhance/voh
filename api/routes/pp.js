var express = require('express');
var router = express.Router();
var paypal = require('paypal-rest-sdk');
var config = {};
var app = express();
var _ = require('lodash');
var http = require('http');
var mailer = require('../services/mailer.js');
var fetch = require('node-fetch');
var multer = require('multer');
var upload = multer({ dest: './uploads/'});

router.init = function(c) {
    config = c;
    paypal.configure(c.ppapi);
};

var billingPlanID = 'P-01V16493U470117147EV6OUQ';

router.post('/upload', upload.array('photos'), function(req, res, next) {
    res.send(req.files);
});


router.createplan = function(req, res) {
    
    //VOH Featured Stylists Billing Plan 
    var billingPlanAttributes = {
        "name": "Voice Of Hair Featured Stylists Plan",
        "description": "Create plan for Voice Of Hair Featured Stylists",
        "type": "INFINITE",
        "payment_definitions": [
            {
                "amount": {
                    "currency": "USD",
                    "value": "15.00"
                },
                "cycles": "0",
                "frequency": "MONTH",
                "frequency_interval": "1",
                "name": "Monthly VOH Featured Stylists",
                "type": "REGULAR"
            }
        ],
        "merchant_preferences": {
            "auto_bill_amount": "YES",
            "cancel_url": "http://localhost:9000/cancel",
            "initial_fail_amount_action": "CONTINUE",
            "max_fail_attempts": "1",
            "return_url": "http://localhost:9000/processagreement",
            "setup_fee": {
                "currency": "USD",
                "value": "0"
            }
        }
    };
    
    var billingPlanUpdateAttributes = [{
        "op": "replace",
        "path": "/",
        "value": {
            "state": "ACTIVE"
        }
    }];
    
    //Create billing plan
    paypal.billingPlan.create(billingPlanAttributes, function(error, billingPlan) {
        
        if(error) {
            console.log(error);
            throw error;
        } else {
            //Activate the plan by changing status to Active
            paypal.billingPlan.update(billingPlan.id, billingPlanUpdateAttributes, function(error, response) {
                
                if(error) {
                    console.log(error);
                    throw error;
                } else {
                    
                    console.log(billingPlan.id);
                }
                
                
            });
        }
        
    });
};


router.createagreement = function(req, res) {

        // mailer.sendMail(req.body);

        var isoDate = new Date();

        isoDate.setSeconds(isoDate.getSeconds() + 4);
        isoDate.toISOString().slice(0, 19) + 'Z';

        var billingAgreementAttributes = {
            "name": "Voice Of Hair Featured Stylists Membership",
            "description": "Become a Featured Stylist on Voice Of Hair",
            "start_date": isoDate,
            "plan": {
                "id": billingPlanID
            },
            "payer": {
                "payment_method": "paypal"
            }
        };

        //Use Activated billing plan to create agreement
        paypal.billingAgreement.create(billingAgreementAttributes, function (error, billingAgreement) {

            if (error) {
                console.log(error);
                throw error;
            } else {
                //capture HATEOAS links
                var links = {};
                billingAgreement.links.forEach(function (linkObj) {
                    links[linkObj.rel] = {
                        "href": linkObj.href,
                        "method": linkObj.method
                    };
                });

                //If redirect url present, redirect user
                if (links.hasOwnProperty('approval_url')) {
                    res.send(links['approval_url'].href);
                } else {
                    console.error('No Redirect URL present');
                }
            }
        });
};

router.processagreement = function(req, res) {
    
    var token = req.query.token;
    
    paypal.billingAgreement.execute(token, {}, function(error, billingAgreement) {
        
        if(error) {
            console.log(error);
            throw error;
        } else {
            res.redirect('http://localhost:8080/#/?level=agreed');
        }
        
    });
    
};

router.cancelagreement = function(req, res) {
    
    res.redirect('http://localhost:8080/#/level=cancelled');
    
};

module.exports = router;