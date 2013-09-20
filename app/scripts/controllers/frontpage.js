'use strict';

angular.module('app')
  .controller('FrontpageCtrl', ['$scope', '$http', 'Restangular', function ($scope, $http, Restangular) {

    var api, lists;

    Restangular.all("version").getList()
    .then(function(data) {
      api = data.api;
      $scope.api = api;
    });

    // fetch all lists
    Restangular.all('lists').getList({frontpage: true})
      .then(function(data) {
        lists = data.lists;
        $scope.lists = lists;
        console.log('> ', lists);
        

        // for each list fetch contents
        angular.forEach(lists, function(value, key) {
          
          Restangular.all('lists/1/movies').getList({id: lists[key].id})
            .then(function(data) {

              lists[key].movies = data.movies;

              window.d = data;
            });
          
        });

      });
    }]);
