var AWS = require('aws-sdk');
var express = require('express');
var app = express();

AWS.config.update({region: 'us-east-1'});
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: ' arn:aws:cognito-idp:us-east-1:910572776631:userpool/us-east-1_6qwbF1q9h',
});

AWS.config.credentials.get(function(){
var syncClient = new AWS.CognitoSyncManager();
syncClient.openOrCreateDataset('myDataset', function(err, dataset) {
   dataset.put('myKey', 'myValue', function(err, record){
   dataset.synchronize({
     onSuccess: function(data, newRecords) {
         // Your handler code here
     }
    });
   });
  });
});


var poolData = {
    UserPoolId : 'us-east-1_6qwbF1q9h', // your user pool id here
    ClientId : '1802q5n9msdeohcqk1irbgo41q' // your app client id here
};

// var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);
// var userData = {
//     Username : '...', // your username here
//     Pool : userPool
// };

app.get('/', function(req, res) {
    console.log('requested home');
});

app.listen(process.env.PORT || 4730);