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

     // Get Map
    NgMap.getMap().then(function(map) {
      vm.map = map;

      vm.home=vm.map.getCenter();
      vm.tennisData=current.query({
        lat:vm.home.lat(),
        lng:vm.home.lng()
        });



        $scope.placeMarker = function(){
             console.log(this.getPlace());
             var loc = this.getPlace().geometry.location;
             $scope.latlng = [loc.lat(), loc.lng()];
             $scope.center = [loc.lat(), loc.lng()];
         };

    });


  //   vm.types = "['establishment']";
  //   vm.mybounds = {radius: 8047};

//  vm.callbackFunc = function(param) {
   // console.log('I know where '+ param +' are. ' + vm.message);
   //console.log('You are at' + vm.map.getCenter());
// };

// Places Changed
     vm.placeChanged = function() {
       vm.place = this.getPlace();
      //  console.log(vm.place);
      //  console.log('location', vm.place.geometry.location);
       vm.home=vm.map.getCenter();
       vm.tennisData=current.query({
         lat:vm.home.lat(),
         lng:vm.home.lng()
       });
       vm.map.setCenter(vm.place.geometry.location);
    //   vm.message = 'You can not hide. :)';
// Close placeChanged





         vm.home=vm.map.getCenter();
         vm.tennisData=current.query({
           lat:vm.home.lat(),
           lng:vm.home.lng()
           });




};
// vm.showMarkerData = function (e, tennis) {
//   vm.tennis = tennis;
//   vm.map.showInfoWindow('tennisInfo',tennis.id);
// };

// Info Window Function

       vm.showDetail = function (e, tennis) {
       vm.tennis = tennis;
       vm.map.showInfoWindow('tennisInfo', tennis);
       };


});
