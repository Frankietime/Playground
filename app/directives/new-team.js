var app = angular.module('playground');

app.directive('newTeam',[ function () {
    return {
        restrict: 'A',
        templateUrl: 'new-team'
    };
}]);