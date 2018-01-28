var app = angular.module('playground');

app.service('newBoardService', ['$http', function ($http){
	var service = {};
	var currentBoard = {};
		service.newBoard = function () {
			return [{board: {
				
			}}]
		};
		service.publishNewBoard = function (board) {
			$http({
				url: 'Api/Board/New',
				method: 'POST',
				data: board
			});
			currentBoard = board;
		};
		service.getCurrentBoard = function () {
			return currentBoard;
		};
	return service;
}]);