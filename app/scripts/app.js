'use strict';

/**
 * @ngdoc overview
 * @name anyone4tennisApp
 * @description
 * # anyone4tennisApp
 *
 * Main module of the application.
 */
angular
  .module('anyone4tennisApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/map', {
        templateUrl: 'views/map.html',
        controller: 'MapCtrl',
        controllerAs: 'map',
        // controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
