(function() {
    vohApp.controller('registerCtrl', ['$scope', '$stateParams', '$location', 'usersService', function($scope, $stateParams, $location, usersService) {
        
        $scope.data = {};
        
        $scope.submitUser = function() {
            console.log('hi');
        }
        
    }]);
}());