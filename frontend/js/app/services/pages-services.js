(function () {
    vohApp.factory('pagesService', ['$resource', function ($resource) {
        var pagesService = {};
        
        pagesService.homePage = $resource(appInfo.api_url + 'pages/:ID', {
            ID: '64'
        });
        
        pagesService.aboutPage = $resource(appInfo.api_url + 'pages/:ID', {
            ID: '18'
        });
        
        pagesService.findStylistsPage = $resource(appInfo.api_url + 'pages/:ID', {
            ID: '81'
        });
        
        pagesService.featuredStylistPage = $resource(appInfo.api_url + 'pages/:ID', {
            ID: '85'
        });
        
        pagesService.expertsPage = $resource(appInfo.api_url + 'pages/:ID', {
            ID: '87'
        });
        
        pagesService.forStylistsPage = $resource(appInfo.api_url + 'pages/:ID', {
            ID: '91'
        });
        
        pagesService.hairspirationPage = $resource(appInfo.api_url + 'pages/:ID', {
            ID: '99'
        });
        
        pagesService.coursesPage = $resource(appInfo.api_url + 'pages/:ID', {
            ID: '106'
        });

        pagesService.contactPage = $resource(appInfo.api_url + 'pages/:ID', {
            ID: '118'
        });
        
        pagesService.legalPolicyPage = $resource(appInfo.api_url + 'pages/:ID', {
            ID: '122'
        });
        
        pagesService.termsServicePage = $resource(appInfo.api_url + 'pages/:ID', {
            ID: '124'
        });
        
        pagesService.privacyPolicyPage = $resource(appInfo.api_url + 'pages/:ID', {
            ID: '126'
        });

        return pagesService;
    }]);
}());