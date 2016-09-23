(function() {
    vohApp.factory('usersService', [ '$rootScope', function($rootScope) {
        
        var usersService = {};
        
        usersService.email = '';
        
        usersService.username = '';
        
        usersService.password = '';
        
        usersService.name = '';
        
        usersService.gender = '';
        
        usersService.hairDo = {};
        
        usersService.challenge = {};
        
        usersService.achieve = {};
        
        usersService.city = '';
        
        usersService.state = '';
        
        usersService.country = '';
        
        usersService.signedIn = false;
        
        usersService.broadcastUserSignUp = function() {
            console.log('broadcasted');
            $rootScope.$broadcast('handleSignUp');
        };
        
        usersService.updatedProfile = function() {
            $rootScope.$broadcast('updatedUserInfo');
        }
        
        usersService.logUserOut = function() {
            $rootScope.$broadcast('loggedUserOut');
        }
        
        usersService.loggingOut = function() {
            usersService.signedIn = false;
            usersService.logUserOut();
        }
        
        usersService.signUpInfo = function(name, email, password) {
            usersService.name = name;
            usersService.email = email;
            usersService.password = password;
            usersService.signedIn = true;
            usersService.broadcastUserSignUp();
        };
        
        usersService.savedInfo = function(data) {
            if(data.name) {
                usersService.name = data.name;
            }
            if(data.email) {
                usersService.email = data.email;
            }
            if(data.password) {
                usersService.password = data.password;
            }
            if(data.passwordConfirm) {
                usersService.passwordConfirm = data.passwordConfirm;
            }
            if(data.gender) {
                usersService.gender = data.gender;
            }
            if(data.hairDo) {
                usersService.hairDo = data.hairDo;
            }
            if(data.challenge) {
                usersService.challenge = data.challenge;
            }
            if(data.achieve) {
                usersService.achieve = data.achieve;
            }
            if(data.city) {
                usersService.city = data.city;
            }
            if(data.state) {
                usersService.state = data.state;
            }
            if(data.country) {
                usersService.country = data.country;
            }
            usersService.updatedProfile();
        }
        
        return usersService;
        
    }]);
}());