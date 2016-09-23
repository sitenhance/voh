var express = require('express');
var bodyParser = require('body-parser');
var jwt = require('jwt-simple');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var request = require('request');
//var facebookAuth = require('./services/facebookAuth.js');
var createSendToken = require('./services/jwt.js');
var AWS = require('aws-sdk');
var uuid = require('node-uuid');
var bcrypt = require('bcrypt-nodejs');

AWS.config.update({ region: 'us-east-1' });
AWS.config.update({ accessKeyId: 'AKIAJYHMJ65Y6XJ54J4A', secretAccessKey: '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' });

var docClient = new AWS.DynamoDB.DocumentClient();

var app = express();

app.use(bodyParser.json());
app.use(passport.initialize());

passport.serializeUser(function(user, done) {
    done(null, user.userIdd);
});

app.use(function(req, res, next) {
    
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With,  Accept, Content-Type, Authorization');
    
    next();
    
});

var strategyOptions = {
    usernameField: 'email'
};

var loginStrategy = new LocalStrategy(strategyOptions, function(email, password, done) {});

var registerStrategy = new LocalStrategy(strategyOptions, function(email, password, done) {
    
    var searchUser = {
        email: email
    };
    
    password = cryptPW(password);
    
    var newUser = {
        email: email
    }
    
    addUserToDynamoDB(email, password, function(user) {
        console.log(user)
        done(null, user);
    });
    
    
});

passport.use('local-register', registerStrategy);

app.post('/register', passport.authenticate('local-register'), function(req, res) {
    
    createSendToken(req.user, res);
    
});

function addUserToDynamoDB(email, password, callback) {
    
    var userId = uuid.v4();
    
    var userInfo = {
        'userId': userId,
        'email': email,
        'password': password
    };

    
    var getParams = {
        TableName: 'voh_users',
        Key: {
            'key': 'users'
        }
    };
    
    docClient.get(getParams, function(err, data) {
       if(err) {
           console.log('Unable to add item. Error JSON:', JSON.stringify(err, null, 2));
       } else {
           
           var userList = data['Item']['users'];
           userList.push(userInfo);
           
           var putParams = {
               TableName: 'voh_users',
               Item: {
                   'key': 'users',
                   'users': userList
               }
           };
           
            docClient.put(putParams, function (err, data) {
                if (err) {
                    console.log('Unable to add item. Error JSON:', JSON.stringify(err, null, 2));
                } else {
                    console.log('Added Item: ', JSON.stringify(data, null, 2));
                    callback(userInfo);
                }
            });     
       }
    });
}

function cryptPW(password) {
    
    bcrypt.genSalt(10, function(err, salt) {
        if(err) {
           return console.log('gensalt error: ', err);
        }
        
        bcrypt.hash(password, salt, null, function(err, hash) {
            if(err) {
                return console.log('Hash error: ', err);
            }
            
            password = hash;
            
        });
        
    });
    
}


var server = app.listen(9000, function() {
    console.log('api listening on', server.address().port);
});