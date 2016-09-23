var vohApp = angular.module('vohApp', ['ui.router', 'dm.stickyNav', 'satellizer']);

vohApp.config(function($locationProvider) {
    // $locationProvider.html5Mode(true);
});

//Application Routing
vohApp.config(function($stateProvider, $urlRouterProvider, $authProvider, $httpProvider, API_URL) {

    //Default to home page
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/js/app/home/home.html'
        })
        .state('find-stylists', {
            url: '/find-stylists',
            templateUrl: './js/app/stylists/find-stylists.html',
            controller: 'stylistCtrl'
        })
        .state('stylist', {
            url: '/stylist/:id',
            templateUrl: './js/app/stylists/single-stylist.html',
            controller: 'stylistCtrl'
        })
        .state('blog', {
            url: '/blog',
            templateUrl: './js/app/blog/blog.html',
            controller: 'blogCtrl'
        })
        .state('register', {
            url: '/register',
            templateUrl: './js/app/register/register.html',
            controller: 'registerCtrl'
        })
        .state('profile', {
            url: '/profile',
            templateUrl: './js/app/profile/profile.html',
            controller: 'profileCtrl'
        })
        .state('thanks', {
            url: '/thanks',
            templateUrl: './js/app/thanks/thanks.html',
            controller: 'thanksCtrl'
        })
    

        $authProvider.loginUrl = API_URL + 'login';
        $authProvider.signupUrl = API_URL + 'register';
    
        $httpProvider.interceptors.push('authInterceptor');


})
.constant('API_URL', 'http://localhost:9000/');