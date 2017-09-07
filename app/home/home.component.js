'use strict';

angular.
  module('home').
  component('home', {
    templateUrl: 'home/home.template.html',
    controller: ['$routeParams',
      function HomeController() {
        this.pizza = "pizza";
      }
    ]
  });