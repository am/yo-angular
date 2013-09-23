'use strict';

angular.module('app', ['ngRoute', 'restangular'])
  .config(function ($routeProvider, RestangularProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/frontpage.html',
        controller: 'FrontpageCtrl'
      })
      .when('/frontpage', {
        templateUrl: 'views/frontpage.html',
        controller: 'FrontpageCtrl'
      })
      .when('/movie/:id', {
        templateUrl: 'views/movie.html',
        controller: 'MovieCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      // REST config
      RestangularProvider.setBaseUrl('https://uk-playground-api.wuaki.tv/');
      RestangularProvider.setRequestSuffix('.json');
      RestangularProvider.setDefaultHttpFields({cache: true});

  })
  .controller('AppCtrl', ['$scope', 'Restangular', function($scope, Restangular){
    Restangular.all("version").getList().then(function(data){
      $scope.api = data.api;
    });
  }]);