angular.module('homeService', [])


.factory('Nominee', function($http) {


	var nomineeFactory = {};

	nomineeFactory.create = function(voterData) {
		return $http.post('/api/hof', voterData);
	}	

	return nomineeFactory;


})

.factory('myService', function($http) {

var savedData = {}
 function set(data) {
   savedData = data;
 }
 function get() {
  return savedData;
 }

 return {
  set: set,
  get: get
 }

});