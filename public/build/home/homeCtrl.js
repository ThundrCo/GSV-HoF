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
  // 	{ firstName:'Nathaniel', lastName: 'Whittemore',role: 'CMO', company:'Partnerned', school:'Weinberg', location:'San Francisco'},
  // 	{ firstName:'Sarah', lastName: 'Adler',role: 'Co-Founder & CTO', company:'Spoon University', school:'Weinberg', location:'New York City'},
  //   { firstName:'Shradha', lastName: 'Agarwal',role: 'Co-Founder & President', company:'Context Media', school:'Weinberg', location:'Chicago'},
  //   { firstName:'Megha', lastName: 'Agarwal',role: 'Designer for Change', company:'IDEO', school:'Weinberg', location:'San Francisco'},
  // ];
  
})
.controller('formController',function($scope) {
    $scope.names = [
      {name: "Art Levinson"},
      {name: "Andy Grove"},
      {name: "Ann Mather"},
      {name: "Arthur Rock"},
      {name: "Bill Draper"},
      {name: "Bill Gates"},
      {name: "Bob Metcalfe"},
      {name: "Bob Noyce"},
      {name: "Carol Bartz"},
      {name: "Condi Rice"},
      {name: "David Duffield"},
      {name: "David Goldberg"},
      {name: "Don Valentine"},
      {name: "Donna Dubinsky"},

    ]
})

