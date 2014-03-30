(function () {
    'use strict';
    var app = angular.module('DrinksMachine', []);

    app.controller('SelectionController', function ($scope, $log) {
        var model = {
            selectedDrink: ''
        };

        $scope.selectDrink = function (selection) {
            model.selectedDrink = selection;
        };

        $scope.eatCoins = function (drink) {
            model.selectedDrink = '';
            $log.info('Rumble, but keep: ' + drink);
        };

        $scope.model = model;
    });

}());
