(function() {
    vohApp.controller('registerCtrl', ['$scope', '$stateParams', '$location', 'usersService', function($scope, $stateParams, $location, usersService) {
        
        $scope.data = {};
        
        $scope.submitUser = function() {
            usersService.signUpInfo($scope.data.name, $scope.data.email, $scope.data.password);
        }
        
    }]);
}());