'use strict';

/**
 * @ngdoc function
 * @name anyone4tennisApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the anyone4tennisApp
 */
/** var MapCtrl = angular.module('MapCtrl',['ngMap']);  */
angular.module('anyone4tennisApp')
  .controller('MapCtrl',function(NgMap) {
    NgMap.getMap().then(function(map) {
      console.log('markers', map.markers);
      console.log('shapes', map.shapes);
    });
});
