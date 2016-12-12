(function () {
    vohApp.controller('stylistCtrl', ['$scope', '$stateParams', '$anchorScroll', '$location', 'usersService', '$sce', 'featuredStylistsService', function ($scope, $stateParams, $anchorScroll, $location, usersService, $sce, featuredStylistsService) {

        //Function to check if $stateParams is empty
        function isEmpty(obj) {
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop))
                    return false;
            }

            return true && JSON.stringify(obj) === JSON.stringify({});
        }

        if(isEmpty($stateParams)) {

            $scope.stylists = [];

            featuredStylistsService.getFeaturedStylists.query(function(res) {
                var posts = res;

                $scope.featuredStylists = _.filter(posts, function(post){
                    _.filter(post.categories, function(category){
                        if(category === 2) {
                            $scope.stylists.push(post);
                        }
                    });
                });
            });

        }

        //Data Object for Find Stylists Drop Down Menu Selections
        $scope.data = {
            specialties: [],
            locations: []
        };

        //Find Stylists That Are Featured
        function findFeaturedStylists() {
            var featuredStylists = _.filter(stylistsList, {
                'featured': true
            });
            return featuredStylists;
        }

        $scope.startedSearch = function(hairstyle) {
            $scope.stylists = findSpecialties(stylistsList, hairstyle);
        };

        $scope.goToStylistHeader = function () {
            $location.hash('top-header');
            $anchorScroll();
        };

        //Function that feeds Locations to the Find Stylist Dropdown Component
        function loadLocations() {

            var stylistLocation;

            _.filter(stylistsList, function(item) {
                var stylistCity = item.city;
                var stylistState = item.state;
                //Create Location string i.e Houston, TX
                stylistLocation = stylistCity + ', ' + stylistState;

                if($scope.data.locations.length === 0) {
                    $scope.data.locations.push(stylistLocation);
                } else {
                    var isInArray = _.indexOf($scope.data.locations, stylistLocation);
                    if(isInArray === -1) {
                        $scope.data.locations.push(stylistLocation);
                    }
                }
            });
        }

        //Fire function for Find Stylist Location Dropdown
        loadLocations();


        //Function that feeds Specialties to the Find Stylist Dropdown Component
        function loadSpecialties() {

            var stylistSpecialties;

            _.filter(stylistsList, function(item) {
                
                _.filter(item.specialties, function(specialty) {
                    if ($scope.data.specialties.length === 0) {
                        $scope.data.specialties.push(specialty);
                    } else {
                        var isInArray = _.indexOf($scope.data.specialties, specialty);
                        if (isInArray === -1) {
                            $scope.data.specialties.push(specialty);
                        } 
                    }
                });
            });
        }

        //Fire function for Find Stylist specialties dropdown component
        loadSpecialties();

        //Find Stylists that do certain haircuts
        function findSpecialties(stylistsArg, pickedStyle) {
            var specialStylists = _.chain(stylistsArg)
                .filter(function (item) {
                    var singleStylist = _.chain(item.specialties).filter(function (hairstyle) {
                        if (hairstyle === pickedStyle) {
                            return true;
                        } else {
                            return false;
                        }
                    }).value();

                    if (singleStylist.length !== 0) {
                        $scope.noResults = false;
                        return item;
                    } else {
                        $scope.noResults = true;
                    }

                })
                .value();

            return specialStylists;
        }

        $scope.specialty = '';
        $scope.location = '';

        // Function for when the user chooses options in the Hero Dropdown in Find Stylists page
        $scope.searchForStylists = function (location, hairstyle) {
            if(location === '' && hairstyle === '') {
                $scope.stylists = findFeaturedStylists();
            } else if (hairstyle === '') {
                var locationArray = location.split(', ');
                var stylistsInLocation = findLocation(locationArray[0], locationArray[1]);
                $scope.stylists = stylistsInLocation;
            } else if (location === '') {
                var stylistsSpecialty = findSpecialties(stylistsList, hairstyle);
                $scope.stylists = stylistsSpecialty;
            } else {
                var locationArray = location.split(', ');
                var stylistsInLocation = findLocation(locationArray[0], locationArray[1]);
                console.log('stylistInLocation, '. stylistsInLocation);
                $scope.stylists = findSpecialties(stylistsInLocation, hairstyle);


            }
            return $scope.stylists;
        };


        //Find stylists by city and state
        function findLocation(city, state) {
            var stylistsInLocation = _.chain(stylistsList)
                .filter(function (item) {
                    if (item.city === city) {
                        if (item.state === state) {
                            console.log(item);
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
            _.chain(stylistsList).filter(function(item) {
                if(item.id === Number($stateParams.id)) {
                    $scope.stylist = item;
                    $scope.stylistBio = $sce.trustAsHtml($scope.stylist.bio);
                }
            }).value();

            $scope.registered = usersService.loggedIn;

            $scope.$on('userAuthentication', function() {
                $scope.registered = usersService.loggedIn;
            });
        }

    }]);
}());