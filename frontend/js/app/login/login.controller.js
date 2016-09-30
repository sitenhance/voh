(function() {
    vohApp.controller('loginCtrl', [ '$scope', '$auth', '$state', 'usersService', function($scope, $auth, $state, usersService) {
        $scope.formData = {};

        var user = {
            email: $scope.formData.email,
            password: $scope.formData.password
        };

        $scope.submit = function(data) {
            $auth.login(data)
            .then(function(res) {

                console.log(res);

                $auth.setToken(res.data.token);

                usersService.userAuthenticated($auth.isAuthenticated(), res.data.user.email);

                if($scope.error) {
                    $scope.error = false;
                }

                $state.go('home');
            })
            .catch(function(err) {
                $scope.error = true;
            });
        };

        $scope.authenticate = function(provider) {
            $auth.authenticate(provider).then(function(res) {
                $auth.setToken(res.data.token);

                usersService.userAuthenticated($auth.isAuthenticated(), res.data.user.email);

                if($scope.error) {
                    $scope.error = false;
                }

                $state.go('home');

            }).catch(function(err) {
                $scope.error = true;
            });
        };


    }]);
}());