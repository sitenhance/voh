(function() {
    vohApp.controller('forStylistsCtrl', [ '$scope', '$http', 'Upload', '$location', function($scope, $http, Upload, $location) {
        $scope.formData = {
            "generalInfo": {},
            "salonInfo": {},
            "specialize": {},
            "bookingMethod": {},
            "socialMedia": {
                "facebook": "http://www.facebook.com/",
                "twitter": "http://www.twitter.com/",
                "instagram": "http://www.instagram.com/",
                "pinterest": "http://www.pinterest.com/"
            },
            'photos': []
        };
        
        $scope.submit = function() {
            $scope.showRedirectModal = true;
            $scope.modalBody = 'Redirecting to you to PayPal';
            Upload.upload({
                url: 'http://localhost:9000/pp/upload',
                arrayKey: '',
                data: {photos: $scope.formData.photos}
            }).then(function(resp) {
                console.log(resp.data);
                $scope.formData.photos = resp.data;
                $http({
                    method: 'POST',
                    url: 'http://localhost:9000/createagreement',
                    data: $scope.formData
                }).then(function(res) {
                    if(res.data !== null && res.data !== undefined) {
                        window.location.assign(res.data);
                    }
                }, function(err) {
                    // console.log('Error status: ' + res.status);
                    console.log(err);
                });
            }, function(err) {

            }, function(evt) {

            });
        };
        
    }]);
}());