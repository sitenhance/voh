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
var _ = require('lodash');
var q = require('q');

AWS.config.update({ region: 'us-east-1' });
AWS.config.update({ accessKeyId: 'AKIAI577ECET3MWQIG3A', secretAccessKey: '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' });

var docClient = new AWS.DynamoDB.DocumentClient();

var app = express();

app.use(bodyParser.json());
app.use(passport.initialize());

passport.serializeUser(function (user, done) {
    done(null, user.userId);
});

app.use(function (req, res, next) {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With,  Accept, Content-Type, Authorization');

    next();

});

var strategyOptions = {
    usernameField: 'email'
};

var loginStrategy = new LocalStrategy(strategyOptions, function (email, password, done) {

    var searchUser = {
        email: email
    };

    // Check to see if the user exists
    var params = {
        TableName: 'voh_users',
        ProjectionExpression: '#users',
        ExpressionAttributeNames: {
            '#users': 'users'
        }
    };

    docClient.scan(params, function (err, data) {
        if (err) {
            console.error('Unable to query. Error: ', JSON.stringify(err, null, 2));
        } else {
            var userData = data.Items[0].users;
            var foundUser = _.findIndex(userData, function (o) {
                return o.email == email;
            });

            if (foundUser == -1) {
                console.log('not found');
                // return done(null, false, {
                //     message: 'Email already exists!'
                // });
            } else {
                console.log('found a user');
                console.log(userData[foundUser].password);
                bcrypt.compare(password, userData[foundUser].password, function (err, res) {
                    if (err) {
                        return done(err);
                    }

                    if (res === false) {
                        return done(null, false, {
                            message: 'Wrong Email/Password'
                        });
                    }

                    var user = {
                        email: userData[foundUser].email,
                        userId: userData[foundUser].userId
                    };

                    return done(null, user);

                });
            }
        }
    });



});

var registerStrategy = new LocalStrategy(strategyOptions, function (email, password, done) {

    // Check to see if the user exists
    var params = {
        TableName: 'voh_users',
        ProjectionExpression: '#users',
        ExpressionAttributeNames: {
            '#users': 'users'
        }
    };

    docClient.scan(params, function (err, data) {
        if (err) {
            console.error('Unable to query. Error: ', JSON.stringify(err, null, 2));
        } else {
            var userData = data.Items[0].users;
            console.log(userData);
            var foundUser = _.findIndex(userData, function (o) {
                return o.email == email;
            });

            if (foundUser != -1) {
                return done(null, false, {
                    message: 'Email exists'
                });
            } else {
                createNewUser(email, password, done);
            }
        }
    });
});


app.post('/facebook', function (req, res) {

    console.log('hit the api');

    var fields = ['id', 'email', 'last_name', 'link', 'name'];

    var accessTokenUrl = 'https://graph.facebook.com/v2.5/oauth/access_token';

    var graphApiUrl = 'https://graph.facebook.com/v2.5/me?fields=' + fields.join(',');

    var params = {
        code: req.body.code,
        client_id: req.body.clientId,
        client_secret: '57e01a838ca2bfe81fb599d63edc395f',
        redirect_uri: req.body.redirectUri
    };

    request.get({ url: accessTokenUrl, qs: params, json: true }, function (err, response, accessToken) {
        console.log('Hola pinche guey: ', response);
        if (response.statusCode !== 200) {
            return res.status(500).send({ message: accessToken.error.message });
        }
        request.get({ url: graphApiUrl, qs: accessToken, json: true }, function (err, response, profile) { 
            if(req.headers.authorization) {
                // Check to see if the user exists
                docClient.scan(params, function (err, data) {
                    if (err) {
                        console.error('Unable to query. Error: ', JSON.stringify(err, null, 2));
                    } else {
                        var userData = data.Items[0].users;
                        var fbUser = _.findIndex(userData, function (o) {
                            return o.facebook == facebook.id;
                        });
                        if (fbUser != -1) {
                            return res.status(409).send({ message: 'There is already a Facebook account that belongs to you' });
                        }
                        
                        var token = req.header('Authorization').split(' ')[1];
                        var payload = jwt.decode(token, 'shh..');

                        var subbedUser = _.findIndex(userData, function(o) {
                            o.userId = payload.sub;
                        });
                    }
                });
            }
        });
    });
});

function createNewUser(email, password, done) {
    //If user doesn't exist, encrypt password and add to DynamoDB
    var passwordCryp;

    bcrypt.genSalt(10, function (err, salt) {
        var hashPW;
        if (err) {
            return console.log('gensalt error: ', err);
        }

        bcrypt.hash(password, salt, null, function (err, hash) {
            if (err) {
                return console.log('Hash error: ', err);
            }

            passwordCryp = hash;
            console.log('adding to db');
            addUserToDynamoDB(email, passwordCryp, function (user) {
                done(null, user);
            });

        });
    });
}

passport.use('local-register', registerStrategy);
passport.use('local-login', loginStrategy);


app.post('/login', passport.authenticate('local-login'), function (req, res) {

    console.log('req is ', req.body);

    createSendToken(req.user, res);

});

app.post('/register', passport.authenticate('local-register'), function (req, res) {

    console.log('req is ', req.body);

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

    docClient.get(getParams, function (err, data) {
        if (err) {
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


var server = app.listen(9000, function () {
    console.log('api listening on', server.address().port);
});