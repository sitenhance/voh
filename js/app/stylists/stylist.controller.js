(function(){
    vohApp.controller('stylistCtrl', ['$scope', function($scope) {
        console.log(stylists);

        //Find Stylists That Are Featured
        function findFeaturedStylists() {
            var featuredStylists = _.filter(stylists, { 'featured': true });
        }
        
        //Find Stylists that do certain haircuts
        function findSpecialties(pickedStyle) {
            var specialStylists = _.chain(stylists)
                .filter(function (item) {

                    var singleStylist = _.chain(item.specialty).filter(function (hairstyle) {
                        if (hairstyle === pickedStyle) {
                            return true;
                        } else { return false; }
                    }).value();

                    if (singleStylist.length !== 0) {
                        return item;
                    }

                })
                .value();
        }

        findSpecialties('bobcuts');

    }]);
}());