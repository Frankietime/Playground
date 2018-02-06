'use-strict';

var app = angular.module('playground');

app.directive('board', [function () {
    return {
        restrict: 'A',
        templateUrl: '../templates/board.html',
        scope: {
            boardData: '='
        },
        link: function (scope) {
            scope.pushItem = function (column) {
                column.items.push({title: '', editing: true});
            }
            scope.addNewList = function () {
                scope.boardData.columns.push({ items: [] });
            }
        }
    };
}]);