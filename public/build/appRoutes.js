angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'home/home.html',
			controller: 'homeController'
		})
		.when('/rank', {
			templateUrl: 'rank/rank.html',
			controller: 'homeController'
		})
		.when('/dashboard', {
			templateUrl: 'dashboard/dashboard.html',
			controller: 'homeController'
		})
		.otherwise ({ redirectTo:'/'});

	$locationProvider.html5Mode(true);

}]);