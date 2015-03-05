//Define the app and dependencies
var data = data;
var app = angular.module('app', ['ngRoute', 'templatescache'])
var log = function(data){console.log(data)};

//Configure routes
app.config(['$routeProvider', '$locationProvider', 
	function($routeProvider, $locationProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'home.html',
				controller: 'main-controller'
			})

			.when('/guidelines', {
				templateUrl: 'styleguide-listing.html',
				controller: 'styleguide-controller'
			})


			.when('/guidelines/:link', {
				templateUrl: 'styleguide-template.html',
				controller: 'styleguide-controller'
			})

			.when('/briefing', {
				templateUrl: 'creative-briefing.html',
				controller: 'main-controller'
			})

			.otherwise({
				redirectTo: '/'
			});
}]);



//Controllers
app.controller('main-controller', function($scope, $location){
	$scope.brands = data;

	$scope.localOnly = function(){
		if($location.$$host === "localhost"){
			return true;
		}
	};

});

app.controller('styleguide-controller', function($scope, $routeParams){
	$scope.brands = data;
	$scope.localOnly = function(){
		if($location.$$host === "localhost"){
			return true;
		}
	};

	for(x in $scope.brands){
		if($scope.brands[x].link === $routeParams.link){
			$scope.brand = $scope.brands[x];
		}
	}



})

// app.controller('brand-controller', function($scope, $routeParams, $location){
// 	//import data into the scope
// 	$scope.data = data; 
// 	//find the brand we've linked to, or back to the homepage
// 	for(x in $scope.data){
// 		if($scope.data[x].link === $routeParams.id){
// 			$scope.brand = $scope.data[x];
// 		}
// 		else{
// 			// $location.path('/');
// 		}
// 	}
// 
// });