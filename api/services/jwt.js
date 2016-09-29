var jwt = require('jwt-simple');
var moment = require('moment');

module.exports = function(user, res) {
    var payload = {
        sub: user.userId,
        exp: moment().add(10, 'days').unix()
    };
    
    var token = jwt.encode(payload, 'shh..');
    
    delete user.password;
    
    res.status(200).send({
        user: user,
        token: token
    });
    
};