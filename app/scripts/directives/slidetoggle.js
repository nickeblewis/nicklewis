'use strict';

/**
 * @ngdoc directive
 * @name nicklewisApp.directive:slidetoggle
 * @description
 * # slidetoggle
 */
angular.module('nicklewisApp')
  .directive('slidetoggle', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var target, content;

        attrs.expanded = false;

        element.bind('click', function () {
          if (!target) {
            target = document.querySelector(attrs.slideToggle);
          }

          if (!content) {
            content = target.querySelector('.slideable_content');
          }

          if (!attrs.expanded) {
            var y = content.clientHeight;
            content.style.border = 0;
            target.style.height = y + 'px';
          } else {
            target.style.height = '0px';
          }
          attrs.expanded = !attrs.expanded;
        });
      }
    };
  });