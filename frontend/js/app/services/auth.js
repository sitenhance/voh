vohApp.service('auth', function($http, API_URL, authToken, $state, $window) {
    this.register = function(email, password) {
        return $http.post(API_URL + 'register', {
            email: email,
            password: password
        }).successful(authSuccessful);
    };
    
    function authSuccessful(res) {
        authToken.setToken(res.token);
        $state.go('home');
    }
    
});