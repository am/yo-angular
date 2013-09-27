'use strict';

angular.module('yoAngularApp')
  .directive('addtotrip', function () {
    return function (scope, element) {
      element.bind('click', function () {
        alert('Have a nice trip!');
      });
    };
  });
