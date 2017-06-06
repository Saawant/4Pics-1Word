angular.module('4p1w').config(['$routeProvider', function($routeProvider) {

    $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html' ,
      controller: 'HomeController as home'
    })



  }])
