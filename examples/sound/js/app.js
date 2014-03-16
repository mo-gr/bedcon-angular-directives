(function () {
    'use strict';
    var app = angular.module('Example', []);

    app.directive('noise', function($document) {
        return {
            link: function (scope, element, attrs) {
                var sound = new Howl({
                    urls: [attrs.noise]
                });
                element.on('click', function() {sound.play();});
            }
        };
    });
}());
