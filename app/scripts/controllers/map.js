'use strict';

/**
 * @ngdoc function
 * @name anyone4TennisApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the anyone4TennisApp
 */
 angular.module('anyone4TennisApp')
   .controller('MapCtrl',function($timeout,$scope,current,NgMap) {
     var vm = this;
  //   vm.types = "['establishment']";
  //   vm.mybounds = {radius: 8047};

// Places Changed
     vm.placeChanged = function() {
       vm.place = this.getPlace();
       console.log(vm.place);
       console.log('location', vm.place.geometry.location);
       vm.home=vm.map.getCenter();
       vm.courtData=current.querry({
         lat:vm.home.lat(),
         lng:vm.home.lng()
       });
       vm.map.setCenter(vm.place.geometry.location);
    //   vm.message = 'You can not hide. :)';
// Close placeChanged

// Get Map
     NgMap.getMap().then(function(map) {
       vm.map = map;
       });

       

// Info Window Function

       vm.showDetail = function (e, courts) {
       vm.courts = courts;
       vm.map.showInfoWindow('foo-iw', courts);
       };


         vm.home=vm.map.getCenter();
         vm.courtData=current.querry({
           lat:vm.home.lat(),
           lng:vm.home.lng()
           });

       vm.callbackFunc = function(param) {
       console.log('I know where '+ param +' are. ' + vm.message);
       console.log('You are at' + vm.map.getCenter());
     };


};
});
