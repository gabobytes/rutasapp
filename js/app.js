//creación del módulo
var appRoutes = angular.module('appRoutes',['ngRoute']);

//configurando rutas


appRoutes.config(function($routeProvider,$locationProvider){	
	//desde angular 1.6
	$locationProvider.hashPrefix('');

	$routeProvider
		.when('/', {			
			templateUrl	: 'pages/home.html',
			controller 	: 'mainController'
		})
		.when('/about', {
			templateUrl	: 'pages/about.html',
			controller 	: 'aboutController'
		})
		.when('/contact', {
			templateUrl : 'pages/contact.html',
			controller 	: 'contactController'
		})
		.otherwise({
			redirectTo: '/'
		});
});

appRoutes.controller('mainController',function($scope){
	$scope.message = "Hola, desde la portada";
});

appRoutes.controller('aboutController',function($scope){
	$scope.message = "About us, this is our page";
});

appRoutes.controller('contactController',function($scope){
	$scope.message = "Contact us!";
});