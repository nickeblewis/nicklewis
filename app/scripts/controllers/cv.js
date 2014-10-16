'use strict';

/**
 * @ngdoc function
 * @name nicklewisApp.controller:CvCtrl
 * @description
 * # CvCtrl
 * Controller of the nicklewisApp
 */
angular.module('nicklewisApp')
  .controller('CvCtrl', function ($scope, CV) {
    $scope.items = CV.all;
    // $scope.items = Tech.limit(5);
  });