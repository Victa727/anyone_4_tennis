"use strict";angular.module("anyone4TennisApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","ngMap"]).config(["$routeProvider",function(n){n.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/map",{templateUrl:"views/map.html",controller:"MapCtrl",controllerAs:"map"}).otherwise({redirectTo:"/"})}]),angular.module("anyone4TennisApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("anyone4TennisApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("anyone4TennisApp").controller("MapCtrl",["NgMap",function(n){n.getMap().then(function(n){console.log("markers",n.markers),console.log("shapes",n.shapes)})}]);