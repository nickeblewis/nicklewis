'use strict';

/**
 * @ngdoc overview
 * @name nicklewisApp
 * @description
 * # nicklewisApp
 *
 * Main module of the application.
 */
angular
  .module('nicklewisApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .constant('FIREBASE_URL', 'https://nicklewis.firebaseio.com/')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/cv', {
        templateUrl: 'views/cv.html',
        controller: 'CvCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .filter('reverse', function() {
    function toArray(list) {
      var k, out = [];
      if (list) {
        if (angular.isArray(list)) {
          out = list;
        } else if (typeof(list) === 'object') {
          for (k in list) {
            if (list.hasOwnProperty(k)) {
              out.push(list[k]);
            }
          }
        }
      }
      return out;
    }
    return function(items) {
      return toArray(items).slice().reverse();
    };
  });