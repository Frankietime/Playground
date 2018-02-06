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
            scope.addNewList = function () {
                scope.boardData.columns.push({ data: 'Column ' + (scope.boardData.columns.length + 1) , items: [], autofocus: true });
            }
        }
    };
}]);