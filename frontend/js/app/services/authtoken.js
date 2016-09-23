'use strict';

/**
 * @ngdoc service
 * @name psJwtApp.authToken
 * @description
 * # authToken
 * Factory in the psJwtApp.
 */
vohApp
    .factory('authToken', function ($window) {

        var storage = $window.localStorage;
        var userToken = 'userToken';
        var isAuthenticated;

        var cachedToken;

        // Public API here
        var authToken = {
            setToken: function (token) {
                cachedToken = token;
                storage.setItem(userToken, token);
                isAuthenticated = true;
            },
            getToken: function () {
                if (!cachedToken) {
                    cachedToken = storage.getItem(userToken);
                }
                return cachedToken;
            },
            isAuthenticated: function () {
                return !!authToken.getToken();
            },
            removeToken: function () {
                cachedToken = null;
                storage.removeItem(userToken);
            }
        };

        return authToken;

    });