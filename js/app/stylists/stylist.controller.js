(function(){
    vohApp.controller('stylistCtrl', ['$scope', function($scope) {
        console.log(stylists);

        //Find Stylists That Are Featured
        function findFeaturedStylists() {
            var featuredStylists = _.filter(stylists, { 'featured': true });
        }
        
        //Find Stylists that do certain haircuts
        function findSpecialties(hairstyles) {
            var specialStylists = _.chain(stylists)
                                    .filter(function(item) {
                                        console.log(item);
                                    })
                                    .value();
        }

        findSpecialties('bobcut');

    }]);
}());