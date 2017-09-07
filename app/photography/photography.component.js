'use strict';

angular.
  module('photography').
  component('photography', {
    templateUrl: 'photography/photography.template.html',
    controller: ['$routeParams',
      function PhotographyController() {
        this.pizza = "pizza";
      }
    ]
  });