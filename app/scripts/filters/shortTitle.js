'use strict';

angular.module('yoAngularApp')
.filter('shortTitle', function () {
  var MAX_LENGTH = 30;
  return function (text) {
    var shortText = text;
    if (text.length > MAX_LENGTH) {
      shortText = text.slice(0, MAX_LENGTH) + "…";
    }
    return shortText;
  }
});