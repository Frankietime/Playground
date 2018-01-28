var app = angular.module('playground');

app.directive('selectTeam',[ function () {
    return {
        restrict: 'A',
        templateUrl: 'select-team'
    };
}]);