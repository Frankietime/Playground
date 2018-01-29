var app = angular.module('playground', ['ngRoute', 'ui.bootstrap']);

app.config(function($routeProvider) {
	var templatesPath = 'templates/';
	$routeProvider.when('/home', {
		templateUrl: 'home',
		controller: 'homeController'
	}).otherwise({
		templateUrl: 'home',
		controller: 'homeController'
	});

});