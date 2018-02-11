'use-strict';

var app = angular.module('playground');

app.service('cardsService', [ function (){
	var service = {};
	var unassignedId = 0;
	service.setIdsToExistingCards = function (columns) {
		angular.forEach(columns, function (column, i) {
			service.setId(column);
		});
	};
	service.setId = function (card) {
		card.id = unassignedId;
		unassignedId++;
	};

	return service;
}]);