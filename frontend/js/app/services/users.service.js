(function() {
    vohApp.factory('usersService', [ '$rootScope', '$auth', '$localStorage', '$window', '$http', 'API_URL', function($rootScope, $auth, $localStorage, $window, $http, API_URL) {
        
        var usersService = {};
        
        usersService.email = '';
        
        usersService.username = '';
        
        usersService.password = '';
        
        usersService.name = '';
        
        usersService.gender = '';
        
        usersService.hairDo = {};
        
        usersService.hairChallenge = {};
        
        usersService.hairAchieve = {};
        
        usersService.city = '';
        
        usersService.state = '';
        
        usersService.country = '';

        usersService.profileLoading = true;
        
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

        usersService.loggedIn = $auth.isAuthenticated();

        usersService.userAuthenticated = function(authStatus, userID) {
            usersService.loggedIn = authStatus;
            usersService.setUserID(userID);
            usersService.broadcastAuth();
        };

        usersService.setUserID = function(name) {
            $localStorage.name = name;
        };

        usersService.broadcastAuth = function() {
            $rootScope.$broadcast('userAuthentication');
        };

        usersService.broadcastProfileLoading = function() {
            $rootScope.$broadcast('profileLoading');
        }

        usersService.getUserInfo = function() {
            $http({
                method: 'GET',
                url: API_URL + 'profile',
                params: { email: $localStorage.name }
            }).then(function(res){
                usersService.savedInfo(res.data);
                usersService.profileLoading = false;
                usersService.broadcastProfileLoading();
            });
        };
        
        usersService.savedInfo = function(data) {
            console.log(data);
            if(data.firstName) {
                usersService.firstName = data.firstName;
            }
            if (data.lastName) {
                usersService.lastName = data.lastName;
            }
            if(data.email) {
                usersService.email = data.email;
            }
            if(data.gender) {
                usersService.gender = data.gender;
            }
            if(data.hairDo) {
                usersService.hairDo = data.hairDo;
            }
            if(data.hairChallenge) {
                usersService.hairChallenge = data.hairChallenge;
            }
            if(data.hairAchieve) {
                usersService.hairAchieve = data.hairAchieve;
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
        };
        
        return usersService;
        
    }]);
}());