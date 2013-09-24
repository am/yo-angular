'use strict';

angular.module('yoAngularApp')
.service('Auth', function Auth() {
  var userIsAuthenticated = false;

  return {
    setUserAuthenticated: function(value){
      userIsAuthenticated = value;
    },

    getUserAuthenticated: function(){
      return userIsAuthenticated;
    }
  }
});
