//Define the app and dependencies
var data = data;
var app = angular.module('app', ['ngRoute', 'templatescache', 'wu.masonry'])
var log = function(data){console.log(data)};

//Configure routes
app.config(['$routeProvider', '$locationProvider', 
	function($routeProvider, $locationProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'styleguide.html',
				controller: 'main-controller'
			})

			.otherwise({
				redirectTo: '/'
			});
}]);



//Controllers
app.controller('main-controller', function($scope){
	$scope.data = data;
	$scope.css = "/src/css/app-styles.css";

});

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