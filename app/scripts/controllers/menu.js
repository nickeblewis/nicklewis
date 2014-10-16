'use strict';

/**
 * @ngdoc function
 * @name nicklewisApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the nicklewisApp
 */
angular.module('nicklewisApp')
  .controller('MenuCtrl', function ($location, $scope) {
    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };
  });