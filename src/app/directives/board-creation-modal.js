'use-strict';

var app = angular.module('playground');

app.directive('boardCreationModal',[ function () {
    return {
        restrict: 'A',
        templateUrl: '../templates/board-creation-modal.html'
    };
}]);