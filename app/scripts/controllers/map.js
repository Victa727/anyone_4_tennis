'use strict';

/**
 * @ngdoc function
 * @name anyone4TennisApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the anyone4TennisApp
 */
 angular.module('anyone4TennisApp')
   .controller('MapCtrl',function($scope,NgMap) {
     var vm = this;
     vm.types = "['establishment']";
     vm.mybounds = {radius: 8047};

     vm.placeChanged = function() {
       vm.place = this.getPlace();
       console.log(vm.place);
       console.log('location', vm.place.geometry.location);
       vm.map.setCenter(vm.place.geometry.location);
       vm.message = 'You can not hide. :)';
     NgMap.getMap().then(function(map) {
       vm.map = map;
       });
       vm.callbackFunc = function(param) {
       console.log('I know where '+ param +' are. ' + vm.message);
       console.log('You are at' + vm.map.getCenter());
     };


};
});
