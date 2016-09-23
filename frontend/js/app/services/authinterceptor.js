'use strict';

/**
 * @ngdoc service
 * @name psJwtApp.authInterceptor
 * @description
 * # authInterceptor
 * Factory in the psJwtApp.
 */
vohApp
    .factory('authInterceptor', function (authToken) {

        // Public API here
        return {
            request: function (config) {
                var token = authToken.getToken();
                
                if(token) {
                    config.headers.Authorization = 'Bearer ' + token;
                }
                
                return config;
                
            },
            response: function (response) {
                return response;
            }
        };
    });