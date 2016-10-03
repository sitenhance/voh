(function() {
    vohApp.controller('loginCtrl', [ '$scope', '$auth', '$state', 'usersService', function($scope, $auth, $state, usersService) {
        $scope.formData = {};

        $scope.fbLoading = false;
        $scope.emailLoading = false;

        var user = {
            email: $scope.formData.email,
            password: $scope.formData.password
        };

        $scope.submit = function(data) {
            
            $scope.emailLoading = true;

            $auth.login(data)
            .then(function(res) {

                $scope.emailLoading = false;

                $auth.setToken(res.data.token);

                usersService.userAuthenticated($auth.isAuthenticated(), res.data.user.email);

                if($scope.error) {
                    $scope.error = false;
                }

                $state.go('home');
            })
            .catch(function(err) {
                $scope.error = true;
                $scope.emailLoading = false;
            });
        };

        $scope.authenticate = function(provider) {
            $scope.fbLoading = true;
            $auth.authenticate(provider).then(function(res) {
                $auth.setToken(res.data.token);

                usersService.userAuthenticated($auth.isAuthenticated(), res.data.user.email);

                if($scope.error) {
                    $scope.error = false;
                }

                $scope.fbLoading = false;

                $state.go('home');

            }).catch(function(err) {
                $scope.error = true;
                $scope.fbLoading = false;
            });
        };


    }]);
}());