var app = angular.module('playground');

app.directive('home',[ function () {
    return {
        restrict: 'A',
        templateUrl: '../templates/home.html'
    };
}]);