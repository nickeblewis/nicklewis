'use strict';

/**
 * @ngdoc function
 * @name nicklewisApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nicklewisApp
 */
angular.module('nicklewisApp')
  .controller('MainCtrl', function($scope, Tech, Status, Data) {

    // Get the list of technologies I support from the back-end
    $scope.items = Tech.all;
    $scope.statuses = Status.all;
    $scope.model = Data.all;

    $scope.hn = {};

    // Get the latest Hacker News top story
    var ref = new Firebase("https://hacker-news.firebaseio.com/v0/");
    var itemRef;

    ref.child('topstories').child(0).on('value', function(snapshot) {
      if (itemRef) {
        itemRef.off();
      }

      //Get the ID of the top article
      var id = snapshot.val();

      //Get the article details and update in realtime
      itemRef = ref.child('item').child(id);
      itemRef.on('value', function(snapshot) {
        var item = snapshot.val();

        $scope.hn = item;
      });
    });
  });