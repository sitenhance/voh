(function() {
    vohApp.factory('usersService', [ '$rootScope', function($rootScope) {
        
        var usersService = {};
        
        usersService.email = '';
        
        usersService.username = '';
        
        usersService.password = '';
        
        usersService.name = '';
        
        usersService.gender = '';
        
        usersService.hairstyles = [];
        
        usersService.challenges = [];
        
        usersService.hairdos = [];
        
        usersService.city = '';
        
        usersService.state = '';
        
        usersService.country = '';
        
        usersService.broadcastUserSignUp = function() {
            $rootScope.$broadcast('handleSignUp');
        };
        
        usersService.signUpInfo = function(name, email, password) {
            usersService.name = name;
            usersService.email = email;
            usersService.password = password;
            usersService.broadcastUserSignUp();
        };
        
        return usersService;
        
    }]);
}());