angular.module('homeCtrl', ['homeService'])
.controller('demoController', function($scope) {

	// // create the list of sushi rolls 
	// $scope.alum = [
	//   { firstName: 'Alexander', lastName: 'White', role: 'Co-Founder', company:'The Next Big Sound (Pandora)', school:'SESP',location:'New York City' },
	//   { firstName:'Jim', lastName: 'White',role: 'Managing Director', company:'Sutter Hill Ventures', school:'McCormick', location:'San Francisco'},
	//  { firstName:'Nathaniel', lastName: 'Whittemore',role: 'CMO', company:'Partnerned', school:'Weinberg', location:'San Francisco'},
	//  { firstName:'Sarah', lastName: 'Adler',role: 'Co-Founder & CTO', company:'Spoon University', school:'Weinberg', location:'New York City'},
	//   { firstName:'Shradha', lastName: 'Agarwal',role: 'Co-Founder & President', company:'Context Media', school:'Weinberg', location:'Chicago'},
	//   { firstName:'Megha', lastName: 'Agarwal',role: 'Designer for Change', company:'IDEO', school:'Weinberg', location:'San Francisco'},
	// ];
	
})
.controller('homeController', function($scope) {
	
	// // create the list of sushi rolls 
	// $scope.alum = [
	//   { firstName: 'Alexander', lastName: 'White', role: 'Co-Founder', company:'The Next Big Sound (Pandora)', school:'SESP',location:'New York City' },
	//   { firstName:'Jim', lastName: 'White',role: 'Managing Director', company:'Sutter Hill Ventures', school:'McCormick', location:'San Francisco'},
	//  { firstName:'Nathaniel', lastName: 'Whittemore',role: 'CMO', company:'Partnerned', school:'Weinberg', location:'San Francisco'},
	//  { firstName:'Sarah', lastName: 'Adler',role: 'Co-Founder & CTO', company:'Spoon University', school:'Weinberg', location:'New York City'},
	//   { firstName:'Shradha', lastName: 'Agarwal',role: 'Co-Founder & President', company:'Context Media', school:'Weinberg', location:'Chicago'},
	//   { firstName:'Megha', lastName: 'Agarwal',role: 'Designer for Change', company:'IDEO', school:'Weinberg', location:'San Francisco'},
	// ];
	
})
.controller('formController',function(Nominee,$scope,$log,$window) {
	var vm = this;
	$scope.hof = [
		{id: 0 , name: "Art Levinson", firstName:"Art", lastName:"Levinson", selected:false},
		{id: 1 , name: "Andy Grove", firstName:"Andy", lastName:"Grove", selected:false},
		{id: 2 , name: "Ann Mather", firstName:"Ann", lastName:"Mather", selected:false},
		{id: 3 , name: "Arthur Rock",firstName:"Arthur", lastName:"Rock", selected:false},
		{id: 4 , name: "Bill Draper", firstName:"Bill", lastName:"Draper", selected:false},
		{id: 5 , name: "Bill Gates", firstName:"Bill", lastName:"Gates", selected:false},
		{id: 6 , name: "Bob Metcalfe", firstName:"Bob", lastName:"Metcalfe", selected:false},
		{id: 7 , name: "Bob Noyce", firstName:"Bob", lastName:"Noyce", selected:false},
		{id: 8 , name: "Carol Bartz", firstName:"Carol", lastName:"Bartz", selected:false},
		{id: 9 , name: "Condi Rice", firstName:"Condi", lastName:"Rice", selected:false},
		{id: 10 , name: "David Duffield", firstName:"David", lastName:"Duffield", selected:false},
		{id: 11 , name: "David Goldberg", firstName:"David", lastName:"Goldberg", selected:false},
		{id: 12 , name: "Don Valentine", firstName:"Don", lastName:"Valentine", selected:false},
		{id: 13 , name: "Donna Dubinsky", firstName:"Donna", lastName:"Dubinsky", selected:false},
	]
	$scope.response = {
			voterName:"Mike Chen"
	};    
	$scope.invalidSelection = true;
	$scope.tooManySelected = false; // disable checkboxes if reach # of selection
	$scope.minSelection = 2;


	$scope.selectedPeople = function selectedPeople() {
		return filterFilter($scope.hof, { selected: true });
	};

	//watch for selection
	$scope.$watch('hof|filter:{selected:true}', function (nv) {
		$scope.response.selectedFirstName = nv.map(function (hof) {
			return hof.firstName;
		});
		$scope.response.selectedLastName = nv.map(function (hof) {
			return hof.lastName;
		});
		$scope.response.selectedID = nv.map(function (hof) {
			return hof.id;
		});
		//check if enough selection
		$scope.invalidSelection = $scope.response.selectedFirstName.length >= $scope.minSelection ? false : true;
		$scope.tooManySelected = $scope.response.selectedFirstName.length >= $scope.minSelection ? true : false;
		$log.log($scope.invalidSelection+" "+$scope.response.selectedFirstName.length);
	}, true);


	$scope.submit = function() {
		vm.processing = true;
		vm.message = '';
		// $log.log($scope.response);
		// $log.log($scope.response.selectedFirstName);
		// console.log($scope.response);
		for(var index = 0 ;index< $scope.response.selectedFirstName.length; index++){
			// console.log($scope.response.selectedFirstName[index]);
			// console.log($scope.response.selectedLastName[index]);
			var entry = {
				voterName : $scope.response.voterName,
				nomineeID : $scope.response.selectedID[index],
				firstName : $scope.response.selectedFirstName[index],
				lastName : $scope.response.selectedLastName[index]
			}
			// $log.log("Entry " + entry.firstName + entry.lastName);
			Nominee.create(entry) 
				.success(function(data){
					vm.processing=false;
					vm.message = data.message;
					// $log.log(vm.message);
				});
		}
		$window.location.href = '/rank';
	}
})

