'use strict';

angular.module('app')
  .controller('FrontpageCtrl', ['$scope', '$http', 'Restangular', function ($scope, $http, Restangular) {
      
      $scope.api = Restangular.all("version").getList()
      .then(function(data) {
        $scope.api = data.api;
      });

      $scope.api = Restangular.all("lists").getList()
      .then(function(data) {
        console.log(data.lists);
        $scope.lists = data.lists;
      });


    }]);
