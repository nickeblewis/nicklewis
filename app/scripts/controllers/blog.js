'use strict';

/**
 * @ngdoc function
 * @name nicklewisApp.controller:CvCtrl
 * @description
 * # CvCtrl
 * Controller of the nicklewisApp
 */
angular.module('nicklewisApp')
	.controller('BlogCtrl', function($scope, Blog) {
		$scope.items = Blog.all;
		// $scope.items = Tech.limit(5);
	});