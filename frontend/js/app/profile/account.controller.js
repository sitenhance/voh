(function() {
    vohApp.controller('accountCtrl', [ '$scope', 'usersService', '$state', '$auth', function($scope, usersService, $state, $auth) {
        
        $scope.loggedIn = usersService.loggedIn;

        console.log($auth.isAuthenticated());

        $scope.$on( 'userAuthentication', function() {
            $scope.loggedIn = usersService.loggedIn;
            $scope.name = usersService.name;
        });

        $scope.logOutUser = function() {
            $auth.logout();
            usersService.userAuthenticated($auth.isAuthenticated(), '');
            $state.go('home');
        };

    }]);
}());