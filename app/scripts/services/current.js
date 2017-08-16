'use strict';

/**
 * @ngdoc service
 * @name anyone4TennisApp.current
 * @description
 * # current
 * Factory in the anyone4TennisApp.
 */
angular.module('anyone4TennisApp')
  .factory('current', function ($resource) {
    // Service logic
    // ...



    // Public API here
    return $resource('https://maps.googleapis.com/maps/api/place/nearysearch/json?location=:lat,:lng&radius=8047&keyword=public+tennis+courts&key=AIzaSyDIHpb4W8x1yLiPkg8KGAZJFrEYZfNl47s&callback=initMap',{},{
      query: {
         method:'GET',
         params:{
            lat:'47.66',
            lng:'-122.34'
         },
         isArray:false
       }
     });

  });