(function(){
    vohApp.factory('featuredStylistsService', ['$resource', function($resource) {
        var featuredStylistsService = {};

        featuredStylistsService.getFeaturedStylists = $resource(appInfo.api_url + 'posts?per_page=100');

        featuredStylistsService.getFeaturedStylist = $resource(appInfo.api_url + 'posts/?id=:ID', {
            ID: '@id'
        });

        return featuredStylistsService; 

    }]);
}());