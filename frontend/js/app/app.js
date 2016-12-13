var vohApp = angular.module('vohApp', ['ui.router', 'dm.stickyNav', 'satellizer', 'bootstrapLightbox', 'ngStorage', 'ngFileUpload', 'ngSanitize', 'ngResource']);

vohApp.config(function ($locationProvider) {
    // $locationProvider.html5Mode(true);
});

//Application Routing
vohApp.config(function ($stateProvider, $urlRouterProvider, $authProvider, $httpProvider, LightboxProvider, API_URL) {

    //Default to home page
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: appInfo.template_url + '/js/app/home/home.html',
            controller: 'homeCtrl'
        })
        .state('find-stylists', {
            url: '/find-stylists',
            templateUrl: appInfo.template_url + '/js/app/stylists/find-stylists.html',
            controller: 'stylistCtrl'
        })
        .state('stylist', {
            url: '/stylist/:id',
            templateUrl: appInfo.template_url + '/js/app/stylists/single-stylist.php',
            controller: 'stylistCtrl'
        })
        .state('blog', {
            url: '/blog',
            templateUrl: appInfo.template_url + '/js/app/blog/blog.html',
            controller: 'blogCtrl'
        })
        .state('register', {
            url: '/register',
            templateUrl: appInfo.template_url + '/js/app/register/register.html',
            controller: 'registerCtrl'
        })
        .state('profile', {
            url: '/profile',
            templateUrl: appInfo.template_url + '/js/app/profile/profile.html',
            controller: 'profileCtrl',
            data: { requiredLogin: true }
        })
        .state('thanks', {
            url: '/thanks',
            templateUrl: appInfo.template_url + '/js/app/thanks/thanks.html',
            controller: 'thanksCtrl'
        })
        .state('login', {
            url: '/login',
            templateUrl: appInfo.template_url + '/js/app/login/login.html',
            controller: 'loginCtrl'
        })
        .state('gallery', {
            url: '/gallery',
            templateUrl: appInfo.template_url + '/js/app/gallery/gallery.html',
            controller: 'galleryCtrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: appInfo.template_url + '/js/app/about/about.html',
            controller: 'aboutCtrl'
        })
        .state('courses', {
            url: '/courses',
            templateUrl: appInfo.template_url + '/js/app/courses/courses.html',
            controller: 'coursesCtrl'
        })
        .state('for-stylists', {
            url: '/for-stylists',
            templateUrl: appInfo.template_url + '/js/app/for-stylists/for-stylists.html',
            controller: 'forStylistsCtrl'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: appInfo.template_url + '/js/app/contact/contact.html',
            controller: 'contactCtrl'
        });

    $authProvider.facebook({
        clientId: '1076459415795318',
        url: API_URL + 'facebook',
        redirectUri: window.location.origin + '/'
    });

    $authProvider.loginUrl = API_URL + 'login';
    $authProvider.signupUrl = API_URL + 'register';

    $httpProvider.interceptors.push('authInterceptor');
    
    LightboxProvider.templateUrl = '/js/app/gallery/lightbox.html';

    


})
    .constant('API_URL', 'http://localhost:9000/')
    .run(function ($rootScope, $auth, $state) {
        $rootScope.$on('$stateChangeStart', function (event, toState) {
            var requiredLogin = false;

            if (toState.data && toState.data.requiredLogin) {
                requiredLogin = true;
            }

            if (requiredLogin && !$auth.isAuthenticated()) {
                event.preventDefault();
                $state.go('login');
            }

        });
    })
    .config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);