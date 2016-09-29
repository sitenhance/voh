(function() {
    vohApp.controller('registerCtrl', ['$scope', '$stateParams', '$state', 'usersService', '$auth', function($scope, $stateParams, $state, usersService, $auth) {
        
        $scope.data = {};
        
        $scope.submitUser = function() {
            $auth.signup({ email: $scope.data.email, password: $scope.data.password, firstname: $scope.data.firstName, lastname: $scope.data.lastName })
            .then(function(res) {

                $auth.setToken(res.data.token);

                usersService.userAuthenticated($auth.isAuthenticated(), res.data.user.email);

                $state.go('home');

                if($scope.userExists) {
                    $scope.userExists = false;
                }
                
            })
            .catch(function(err) {
                $scope.userExists = true;
            });
        }
        
    }]);
}());