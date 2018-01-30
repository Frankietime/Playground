var app = angular.module('playground');

app.directive('board',[ function () {
    return {
        restrict: 'A',
        templateUrl: '../templates/board.html',
        scope: {},
        link: function (scope) {

        }
    };
}]);