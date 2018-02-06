'use-strict';

var app = angular.module('playground', ['ngRoute', 'ui.bootstrap', 'ngAnimate', 'ngTouch', 'dndLists']);

app.config(function($routeProvider, $uibTooltipProvider) {
	var path = 'templates/';
	$routeProvider.when('/home', {
		templateUrl: path + 'home.html',
		controller: 'homeController'
	}).when('/board', {
		templateUrl: path + 'board-view.html',
		controller: 'boardController'
	}).otherwise({
		templateUrl: path + 'home.html',
		controller: 'homeController'
	});

	$uibTooltipProvider.setTriggers({
		'allwaysOpen': 'allwaysClose'
	});
});