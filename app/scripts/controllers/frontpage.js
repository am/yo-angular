'use strict';

angular.module('yoAngularApp')
.controller('FrontpageCtrl', ['$scope', 'Restangular', function ($scope, Restangular) {
  var lists;
  // fetch all lists to get the respective id's
  Restangular.all('lists').getList({frontpage: true})
  .then(function(data) {
    // save lists data to model
    lists = data.lists;
    // fetch movies content for each list
    angular.forEach(lists, function(value, key) {
      Restangular.all('lists/' + lists[key].id + '/movies').getList().then(function(data) {
        lists[key].movies = data.movies;
      });
    });
    // pass model to the view
    $scope.lists = lists;
  });
}]);
