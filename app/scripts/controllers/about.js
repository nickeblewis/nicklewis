'use strict';

/**
 * @ngdoc function
 * @name nicklewisApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the nicklewisApp
 */
angular.module('nicklewisApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
