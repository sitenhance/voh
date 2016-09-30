(function () {
    vohApp.controller('galleryCtrl', ['$scope', 'Lightbox', function ($scope, Lightbox) {
        $scope.images = [
            {
                'url': '../../../images/gallery-one-lg.jpg',
                'thumbUrl': '../../../images/gallery-one-sm.jpg',
                'caption': 'This is just a basic description of this lovely image.'
            },
            {
                'url': '../../../images/gallery-two-lg.jpg',
                'thumbUrl': '../../../images/gallery-two-sm.jpg',
                'caption': 'This is just a basic description of this lovely image.'
            },
            {
                'url': '../../../images/gallery-three-lg.jpg',
                'thumbUrl': '../../../images/gallery-three-sm.jpg',
                'caption': 'This is just a basic description of this lovely image.'
            },
            {
                'url': '../../../images/gallery-four-lg.jpg',
                'thumbUrl': '../../../images/gallery-four-sm.jpg',
                'caption': 'This is just a basic description of this lovely image.'
            },
            {
                'url': '../../../images/gallery-five-lg.jpg',
                'thumbUrl': '../../../images/gallery-five-sm.jpg',
                'caption': 'This is just a basic description of this lovely image.'
            },
            {
                'url': '../../../images/gallery-six-lg.jpg',
                'thumbUrl': '../../../images/gallery-six-sm.jpg',
                'caption': 'This is just a basic description of this lovely image.'
            },
            {
                'url': '../../../images/gallery-seven-lg.jpg',
                'thumbUrl': '../../../images/gallery-seven-sm.jpg',
                'caption': 'This is just a basic description of this lovely image.'
            },
            {
                'url': '../../../images/gallery-eight-lg.jpg',
                'thumbUrl': '../../../images/gallery-eight-sm.jpg',
                'caption': 'This is just a basic description of this lovely image.'
            }
        ];

        $scope.openLightboxModal = function (index) {
            Lightbox.openModal($scope.images, index);
        };
    }]);
}());