var app = angular.module('playground');

app.directive('newTeam',[ function () {
    return {
        restrict: 'A',
        templateUrl: '../templates/new-team.html'
    };
}]);