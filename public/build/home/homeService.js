angular.module('homeService', [])


.factory('Alum', function($http) {


	var alumFactory = {};

	alumFactory.all = function() {
		return $http.get('/api/alums');
	}

	alumFactory.getData = function() {
		return $http.get('/api/get-data');
	}

	alumFactory.getDemo = function() {
		return $http.get('/api/demo');
	}

	alumFactory.create = function(alumData) {
		return $http.post('/api/', alumData);
	}	

	return alumFactory;


});