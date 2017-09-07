'use strict';

angular.
  module('myApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/home', {
          template: "<home></home>"
        }).
        when('/photography', {
          template: "<photography></photography>"
        }).
        otherwise('/home');
    }
  ]);
