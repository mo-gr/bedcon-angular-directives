(function () {
    'use strict';
    var app = angular.module('DrinksMachine', []);

    app.controller('SelectionController', function ($scope) {
        var model = {
            selectedDrink: ''
        };

        $scope.selectDrink = function (selection) {
            model.selectedDrink = selection;
        };

        $scope.model = model;
    });

    app.directive('moNoise', function () {
        return {
            link: function (scope, element, attrs) {
                var sound = new Howl({
                    urls: [attrs.moNoise]

                });
                element.on('click', function () {sound.play();});
            }
        };
    });

    app.directive('drinkSelect', function () {
        return {
            restrict: 'E',
            templateUrl: 'drink-select.html',
            replace: true,
            scope: {
                drink: '@',
                selection: '='
            }
        }
    });
}());
