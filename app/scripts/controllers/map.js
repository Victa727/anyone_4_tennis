'use strict';

/**
 * @ngdoc function
 * @name anyone4TennisApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the anyone4TennisApp
 */
angular.module('anyone4TennisApp')
  .controller('MapCtrl',function(NgMap) {
    NgMap.getMap().then(function(map) {
      console.log('markers', map.markers);
      console.log('shapes', map.shapes);
    });
});
