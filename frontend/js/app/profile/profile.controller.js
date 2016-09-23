(function() {
    vohApp.controller('profileCtrl', [ '$scope', 'usersService', function($scope, usersService) {
        
        $scope.userData = {};
        
        $scope.changesSaved = false;
        
        $scope.userData.name = usersService.name;
        $scope.userData.email = usersService.email;
        $scope.userData.password = usersService.password;
        $scope.userData.gender = usersService.gender;
        $scope.userData.hairDo = usersService.hairDo;
        $scope.userData.challenge = usersService.challenge;
        $scope.userData.achieve = usersService.achieve;
        $scope.userData.city = usersService.city;
        $scope.userData.state = usersService.state;
        $scope.userData.country = usersService.country;

        
        $scope.$on('handleSignUp', function() {
            $scope.userData.name = usersService.name;
            $scope.userData.email = usersService.email;
            $scope.userData.password = usersService.password;
        });
        
        $scope.$on('updatedUserInfo', function() {
            $scope.userData.name = usersService.name;
            $scope.userData.email = usersService.email;
            $scope.userData.password = usersService.password;
            $scope.userData.gender = usersService.gender;
            $scope.userData.hairDo = usersService.hairDo;
            $scope.userData.challenge = usersService.challenge;
            $scope.userData.achieve = usersService.achieve;
            $scope.userData.city = usersService.city;
            $scope.userData.state = usersService.state;
            $scope.userData.country = usersService.country;
            $scope.changesSaved = true;
        });
        
        $scope.saveUserInfo = function() {
            usersService.savedInfo($scope.userData);
        }
        
    }])
}());