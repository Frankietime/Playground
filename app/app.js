var app = angular.module('playground', ['ngRoute', 'ui.bootstrap', 'ngAnimate', 'ngTouch']);

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