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
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl'
      })
      .when('/services', {
        templateUrl: 'views/comingsoon.html',
        controller: 'CvCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/comingsoon.html',
        controller: 'CvCtrl'
      })
      .when('/about', {
        templateUrl: 'views/comingsoon.html',
        controller: 'CvCtrl'
      })
      .when('/photography', {
        templateUrl: 'views/comingsoon.html',
        controller: 'CvCtrl'
      })
      .when('/cv', {
        templateUrl: 'views/cv.html',
        controller: 'CvCtrl'
      })
      .when('/help', {
        templateUrl: 'views/help.html',
        controller: 'HelpCtrl'
      })
      .when('/tables', {
        templateUrl: 'views/tables.html',
        controller: 'TablesCtrl'
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