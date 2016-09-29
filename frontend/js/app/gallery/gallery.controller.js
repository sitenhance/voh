(function () {
    vohApp.controller('galleryCtrl', ['$scope', 'Lightbox', function ($scope, Lightbox) {
        $scope.images = [
            {
                'url': '1.jpg',
                'caption': 'Optional caption',
                'thumbUrl': 'thumb1.jpg' // used only for this example
            },
            {
                'url': '2.gif',
                'thumbUrl': 'thumb2.jpg'
            },
            {
                'url': '3.png',
                'thumbUrl': 'thumb3.png'
            }
        ];

        $scope.openLightboxModal = function (index) {
            Lightbox.openModal($scope.images, index);
        };
    }]);
}());