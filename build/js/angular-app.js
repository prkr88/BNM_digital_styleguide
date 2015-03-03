
//Define the app and dependencies
var app = angular.module('app', ['ngRoute', 'templatescache'])

//Configure routes
app.config(['$routeProvider', '$locationProvider', 
	function($routeProvider, $locationProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'home.html',
				controller: 'main-controller'
			})

			.when('/brand/:id', {
				templateUrl: 'brand.html',
				controller: 'brand-controller'
			})

			.otherwise({
				redirectTo: '/'
			});
}]);


//Controllers
app.controller('main-controller', function($scope){


});

app.controller('brand-controller', function($scope, $routeParams){
	console.log("routeParams are: ", $routeParams.id);

	
});