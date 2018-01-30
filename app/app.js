var app = angular.module('playground', ['ngRoute', 'ui.bootstrap', 'ngAnimate', 'ngTouch']);

app.config(function($routeProvider) {
	var path = 'templates/';
	$routeProvider.when('/home', {
		templateUrl: path + 'home.html',
		controller: 'homeController'
	}).when('/board', {
		templateUrl: path + 'board.html',
		controller: 'boardController'
	}).otherwise({
		templateUrl: path + 'home.html',
		controller: 'homeController'
	});
});