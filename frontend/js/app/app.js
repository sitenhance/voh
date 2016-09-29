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
            controller: 'profileCtrl',
            data: {requiredLogin: true}
        })
        .state('thanks', {
            url: '/thanks',
            templateUrl: './js/app/thanks/thanks.html',
            controller: 'thanksCtrl'
        })
<<<<<<< HEAD
        .state('login', {
            url: '/login',
            templateUrl: './js/app/login/login.html',
            controller: 'loginCtrl'
        });

        $authProvider.facebook({
            clientId: '1076459415795318',
            url: API_URL + 'facebook',
            redirectUri: window.location.origin + '/',
            oauthType: '2.0'
        });
=======
        .state('gallery', {
            url: '/gallery',
            templateUrl: './js/app/gallery/gallery.html',
            controller: 'galleryCtrl'
        })
>>>>>>> c4f56a48b4a1475a784e112abfa3ed0b213afccf
    

        $authProvider.loginUrl = API_URL + 'login';
        $authProvider.signupUrl = API_URL + 'register';
    
        $httpProvider.interceptors.push('authInterceptor');


})
.constant('API_URL', 'http://localhost:9000/')
.run(function($rootScope, $auth, $state) {
    $rootScope.$on('$stateChangeStart', function(event, toState) {
        var requiredLogin = false;
        
        if(toState.data && toState.data.requiredLogin) {
            requiredLogin = true;
        }
        
        if(requiredLogin && !$auth.isAuthenticated()) {
            event.preventDefault();
            $state.go('login');
        }
        
    });
});