(function() {
    vohApp.controller('accountCtrl', [ '$scope', 'usersService', '$state', '$auth', '$localStorage', function($scope, usersService, $state, $auth, $localStorage) {
        
        $scope.loggedIn = usersService.loggedIn;

        $scope.storage = $localStorage;

        if ($scope.storage.name !== undefined && $scope.storage.name !== '') {
            $scope.name = $localStorage.name;
        }

        $scope.$on( 'userAuthentication', function() {
            $scope.loggedIn = usersService.loggedIn;
            $scope.name = $localStorage.name;
        });

        $scope.logOutUser = function() {
            $auth.logout();
            localStorage.removeItem('ngStorage-name');
            usersService.userAuthenticated($auth.isAuthenticated(), '');
            $state.go('home');
        };
    }]);
}());