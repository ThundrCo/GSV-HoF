angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'home/home.html',
			controller: 'homeController'
		})
		.otherwise ({ redirectTo:'/'});

	$locationProvider.html5Mode(true);

}]);