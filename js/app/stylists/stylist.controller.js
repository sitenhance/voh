(function(){
    vohApp.controller('stylistCtrl', ['$scope', function($scope) {

        //Find Stylists That Are Featured
        function findFeaturedStylists() {
            var featuredStylists = _.filter(stylists, { 'featured': true });
            return featuredStylists;
        }

        $scope.stylists = findFeaturedStylists();
        
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

            return specialStylists;
        }

        findSpecialties('bobcuts');

        //Find stylists by city and state
        var location = 'Houston, TX';
        var locationArray = location.split(', ');

        function findLocation(city, state) {
            var stylistsInLocation = _.chain(stylists)
            .filter(function(item) {
                if(item.city === city) {
                    if(item.state === state) {
                        return item;
                    }
                }
            })
            .value();
            return stylistsInLocation;
        }
        findLocation(locationArray[0], locationArray[1]);

        //Move featured stylists to the top
        function featuredFirst(pikachu) {
            var stylistsArray = [];
            var formattedStylists = _.chain(pikachu).filter(function(item) {
                if(item.featured === true) {
                    return stylistsArray.push(item);
                }
            }).value();
            pikachu.unshift(formattedStylists);
             return _.flattenDeep(pikachu);
        }

    }]);
}());