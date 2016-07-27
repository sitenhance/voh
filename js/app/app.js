var vohApp = angular.module('vohApp', ['ui.router']);

vohApp.config(function($locationProvider) {
    // $locationProvider.html5Mode(true);
});

//Application Routing
vohApp.config(function($stateProvider, $urlRouterProvider) {

    //Default to home page
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'js/app/home/home.html'
        })
        .state('find-stylists', {
            url: '/find-stylists',
            templateUrl: 'js/app/stylists/find-stylists.html',
            controller: 'stylistCtrl'
        })
        .state('stylist', {
            url: '/stylist/:id',
            templateUrl: 'js/app/stylists/single-stylist.html',
            controller: 'stylistCtrl'
        });


});