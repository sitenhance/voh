(function() {
    vohApp.controller('accountCtrl', [ '$scope', 'usersService', '$state', function($scope, usersService, $state) {
        $scope.userSignedIn = usersService.signedIn;
        $scope.name = usersService.name;
        
        $scope.$on('handleSignUp', function() {
            $scope.userSignedIn = usersService.signedIn;
            $scope.name = usersService.name;
        });
        
        $scope.$on('loggedUserOut', function() {
            $scope.userSignedIn = usersService.signedIn;
        });
        
        $scope.logOutUser = function() {
            usersService.loggingOut();
            $state.go('home');
        }
        
    }]);
}());