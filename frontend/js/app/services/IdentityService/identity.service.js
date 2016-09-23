(function() {
    angular.module('IdentityService', [ 'satellizer' function(satellizer) {}])
    .config(function($provide) {
        $provide.provider('IdentityService', function() {
            
           var baseUrl = null;
            this.setBaseUrl = function(o) {
                baseUrl = o;
            }
            
            var loginState = null;
            this.setLoginState = function(o) {
                loginState = o;
            }
            
            var authenticatedState = null;
            this.setAuthenticatedState = function(o) {
                authenticatedState = o;
            };
            
            var localCredentialsKey = null;
            this.setLocalCredentialsKey = function(o) {
                localCredentialsKey = o;
            };
            
            var localUserKey = null;
            this.setLocalUserKey = function(o) {
                localUserKey = o;
            };
            
            this.$get = function($injector) {
                var inst = $injector.instantiate(IdentityService);
                inst.baseUrl = baseUrl;
                inst.loginState = loginState || 'auth.login';
                inst.authenticatedState = authenticatedState || 'auth.profile';
                inst.localCredentialsKey = localCredentialsKey || 'credentials';
                inst.localUserKey = localUserKey || 'user';
                return inst;
            };
            
        });
    });
}());