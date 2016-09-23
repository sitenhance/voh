(function () {
    vohApp.controller('stylistCtrl', ['$scope', '$stateParams', '$anchorScroll', '$location', function ($scope, $stateParams, $anchorScroll, $location) {
        console.log(stylists);
        //Function to check if $stateParams is empty
        function isEmpty(obj) {
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop))
                    return false;
            }

            return true && JSON.stringify(obj) === JSON.stringify({});
        }

        //Find Stylists That Are Featured
        function findFeaturedStylists() {
            var featuredStylists = _.filter(stylists, {
                'featured': true
            });
            return featuredStylists;
        }

        $scope.stylists = findFeaturedStylists();

        $scope.startedSearch = function(hairstyle) {
            $scope.stylists = findSpecialties(stylists, hairstyle);
        };

        $scope.goToStylistHeader = function () {
            $location.hash('top-header');
            $anchorScroll();
        };

        //Find Stylists that do certain haircuts
        function findSpecialties(stylistsArg, pickedStyle) {
            var specialStylists = _.chain(stylistsArg)
                .filter(function (item) {

                    var singleStylist = _.chain(item.specialty).filter(function (hairstyle) {
                        if (hairstyle === pickedStyle) {
                            return true;
                        } else {
                            return false;
                        }
                    }).value();

                    if (singleStylist.length !== 0) {
                        return item;
                    }

                })
                .value();

            return specialStylists;
        }


        //Data Object for Find Stylists Drop Down Menu Selections
        $scope.data = {
            hairstyle: null,
            location: null
        };

        // Function for when the user chooses options in the Hero Dropdown in Find Stylists page
        $scope.searchForStylists = function (location, hairstyle) {
            if (hairstyle === null) {
                var locationArray = location.split(', ');
                var stylistsInLocation = findLocation(locationArray[0], locationArray[1]);
                $scope.stylists = stylistsInLocation;
            } else if (location === null) {
                var stylistsSpecialty = findSpecialties(stylists, hairstyle);
                $scope.stylists = stylistsSpecialty;
            } else {
                var locationArray = location.split(', ');
                var stylistsInLocation = findLocation(locationArray[0], locationArray[1]);
                $scope.stylists = findSpecialties(stylistsInLocation, hairstyle);
            }
            return $scope.stylists;
        };


        //Find stylists by city and state
        function findLocation(city, state) {
            var stylistsInLocation = _.chain(stylists)
                .filter(function (item) {
                    if (item.city === city) {
                        if (item.state === state) {
                            return item;
                        }
                    }
                })
                .value();
            return stylistsInLocation;
        }

        //Move featured stylists to the top
        function featuredFirst(pikachu) {
            var stylistsArray = [];
            var formattedStylists = _.chain(pikachu).filter(function (item) {
                if (item.featured === true) {
                    return stylistsArray.push(item);
                }
            }).value();
            pikachu.unshift(formattedStylists);
            return _.flattenDeep(pikachu);
        }

        //================ Single Stylist Logic ==================//
        if(!isEmpty($stateParams)) {
            console.log($stateParams);
            _.chain(stylists).filter(function(item) {
                if(item.id === Number($stateParams.id)) {
                    $scope.stylist = item;
                }
            }).value();
        }

    }]);
}());