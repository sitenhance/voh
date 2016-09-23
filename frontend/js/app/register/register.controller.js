(function() {
    vohApp.controller('registerCtrl', ['$scope', '$stateParams', '$state', 'usersService', '$auth', function($scope, $stateParams, $state, usersService, $auth) {
        
        $scope.data = {};
        
        $scope.submitUser = function() {
            $auth.signup({ email: $scope.data.email, password: $scope.data.password })
            .then(function(res) {
                console.log(res);
            })
            .catch(function(err) {
                console.log(err);
            });
        }
        
    }]);
}());