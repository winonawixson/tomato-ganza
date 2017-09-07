'use strict';

angular.
  module('photography').
  component('photography', {
    templateUrl: 'photography/photography.template.html',
    controller: ['$routeParams',
      function PhotographyController() {
        this.imagePath = "img/pinkFlowersAndBees.jpg";
        this.imageTitle = "Fuzzy Bees";
        this.imageDescription = "The titles of Washed Out's breakthrough song and the first " + 
                                "single from Paracosm share the two most important words in " + 
                                "Ernest Greene's musical language: feel it. It's a simple request, as well...";
      }
    ]
  });