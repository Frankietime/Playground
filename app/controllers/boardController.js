var app = angular.module('playground');

app.controller('boardController', ['$scope', 'boardService', function ($scope, boardService) {
    $scope.board = boardService.getCurrentBoard();
    $scope.board.columns.push({data: 'Add new list...', newList: true});
}]);