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
            console.log(stylistsInLocation);
        }
        findLocation(locationArray[0], locationArray[1]);

        //Move featured stylists to the top
        function featuredFirst(pikachu) {
            var stylistsArray = [];
            // stylistsArray = pikachu;
            // console.log(stylistsArray);
            var formattedStylists = _.chain(pikachu).filter(function(item) {
                console.log('Looping through stylists: ', item);
                if(item.featured === true) {
                    return stylistsArray.push(item);
                    //  return pikachu.unshift(item);
                }
            }).value();
            pikachu.unshift(formattedStylists);
             return _.flattenDeep(pikachu);
        }

        console.log(featuredFirst(stylists));

    }]);
}());