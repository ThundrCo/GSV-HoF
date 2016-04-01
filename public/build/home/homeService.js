angular.module('homeService', [])


.factory('Nominee', function($http) {


	var nomineeFactory = {};

	nomineeFactory.create = function(voterData) {
		return $http.post('/api/hof', voterData);
	}	

	return nomineeFactory;


});