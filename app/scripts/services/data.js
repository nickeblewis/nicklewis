'use strict';
/*global Firebase */

/**
 * @ngdoc service
 * @name nicklewisApp.data
 * @description
 * # data
 * Service in the nicklewisApp.
 */

/* TODO: Refactor at some point the repeated code below :-) */
angular.module('nicklewisApp')
  .factory('Data', ['$firebase', 'FIREBASE_URL',
    function($firebase, FIREBASE_URL) {

      var ref = new Firebase(FIREBASE_URL);

      var items = $firebase(ref);

      var Item = {
        all: items,
        find: function(itemId) {
          return items.$child(itemId);
        },
      };

      return Item;
    }
  ])
  .factory('Tech', ['$firebase', 'FIREBASE_URL',
    function($firebase, FIREBASE_URL) {

      var ref = new Firebase(FIREBASE_URL + 'technologies');

      var items = $firebase(ref);

      var Item = {
        all: items,
        find: function(itemId) {
          return items.$child(itemId);
        },
      };

      return Item;
    }
  ])
  .factory('CV', ['$firebase', 'FIREBASE_URL',
    function($firebase, FIREBASE_URL) {

      var ref = new Firebase(FIREBASE_URL + 'cv');

      var items = $firebase(ref);

      var Item = {
        all: items,
        find: function(itemId) {
          return items.$child(itemId);
        },
      };

      return Item;
    }
  ])

.factory('Status', ['$firebase', 'FIREBASE_URL',
  function($firebase, FIREBASE_URL) {

    var ref = new Firebase(FIREBASE_URL + 'status');

    var items = $firebase(ref);

    var Item = {
      all: items,
      find: function(itemId) {
        return items.$child(itemId);
      },
    };

    return Item;
  }
])

.factory('Blog', ['$firebase', 'FIREBASE_URL',
  function($firebase, FIREBASE_URL) {

    var ref = new Firebase(FIREBASE_URL + 'blog');

    var items = $firebase(ref);

    var Item = {
      all: items,
      find: function(itemId) {
        return items.$child(itemId);
      },
    };

    return Item;
  }
]);