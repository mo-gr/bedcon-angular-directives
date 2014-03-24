(function () {
    'use strict';
    var app = angular.module('Example', []);

    app.directive('noise', function() {
        return {
            link: function (scope, element, attrs) {
                var sound = new Howl({
                    urls: [attrs.noise],
                    onplay: function () {
                        scope.$apply(function () {
                            scope.playing = attrs.noise;
                        });
                    },
                    onend: function () {
                        scope.$apply(function () {
                            scope.playing = "";
                        });
                    }
                });
                element.on('click', function() {sound.play();});
            }
        };
    });
}());
