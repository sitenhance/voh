(function() {
    vohApp.controller('homeCtrl', ['$scope', '$stateParams', '$location', function($scope, $stateParams, $location) {

        $scope.showAgreeModal = false;

        if($location.search().level) {
            if($location.search().level === 'agreed') {

                $scope.showAgreeModal = true;

            } else if($location.search().level === 'cancelled') {
            } 
        }

        $scope.closeModal = function() {
            $scope.showAgreeModal = false;
        };

    }]);
}());