'use-strict';

var app = angular.module('playground');

app.directive('boardLists', [ function () {
    return {
        restrict: 'A',
        scope: {
            lists: '=',
            members: '='
        },
        templateUrl: '../templates/board-lists.html',
        link: function (scope) {
            scope.pushItem = function (column) {
                column.items.push({data: '', title: '', editing: true});
            }
        }
    };
}]);