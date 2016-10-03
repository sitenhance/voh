(function() {
    vohApp.controller('profileCtrl', [ '$scope', 'usersService', '$http', 'API_URL', '$localStorage', function($scope, usersService, $http, API_URL, $localStorage) {
        
        $scope.userData = {};
        
        $scope.changesSaved = false;
        $scope.savePending = 

        usersService.getUserInfo();
        
        $scope.userData.firstName = usersService.firstName;
        $scope.userData.lastName = usersService.lastName;
        $scope.userData.email = usersService.email;
        $scope.userData.password = usersService.password;
        $scope.userData.gender = usersService.gender;
        $scope.userData.hairDo = usersService.hairDo;
        $scope.userData.hairChallenge = usersService.hairChallenge;
        $scope.userData.hairAchieve = usersService.hairAchieve;
        $scope.userData.city = usersService.city;
        $scope.userData.state = usersService.state;
        $scope.userData.country = usersService.country;

        
        $scope.$on('handleSignUp', function() {
            $scope.userData.email = usersService.email;
            $scope.userData.password = usersService.password;
        });
        
        $scope.$on('updatedUserInfo', function() {
            $scope.userData.firstName = usersService.firstName;
            $scope.userData.lastName = usersService.lastName;
            $scope.userData.email = usersService.email;
            $scope.userData.password = usersService.password;
            $scope.userData.gender = usersService.gender;
            $scope.userData.hairDo = usersService.hairDo;
            $scope.userData.hairChallenge = usersService.hairChallenge;
            $scope.userData.hairAchieve = usersService.hairAchieve;
            $scope.userData.city = usersService.city;
            $scope.userData.state = usersService.state;
            $scope.userData.country = usersService.country;
        });
        
        $scope.saveUserInfo = function() {
            $scope.savePending = true;
            var data = {
                user: $scope.userData,
                email: $localStorage.name,
                update: true
            };
            $http({
                method: 'POST',
                url: API_URL + 'profile',
                data: data
            }).then(function(res) {
                $scope.changesSaved = true;
            }, function(err) {

            });
            console.log($scope.userData);
            usersService.savedInfo($scope.userData);
        };
        
    }])
}());