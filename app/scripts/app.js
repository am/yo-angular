'use strict';

angular.module('yoAngularApp', ['ngRoute', 'restangular'])
  .config(function ($routeProvider, RestangularProvider) {
    $routeProvider.routes = 
    {
      '/frontpage': {
        templateUrl: function() {
          var iOS = /(iPad|iPhone|iPod)/g.test( navigator.userAgent );
          return 'views/frontpage' + (iOS ? '_m' : '') + '.html';
        },
        controller: 'FrontpageCtrl',
        auth: false
      },
      '/movie/:id': {
        templateUrl: 'views/movie.html',
        controller: 'MovieCtrl',
        auth: true
      },
      '/movies': {
        templateUrl: 'views/movies.html',
        controller: 'MoviesCtrl',
        auth: true
      },
      '/seasons': {
        templateUrl: 'views/seasons.html',
        controller: 'TvshowsCtrl',
        auth: false
      }
    }

    // config app router
    for(var path in $routeProvider.routes) {
      $routeProvider.when(path, $routeProvider.routes[path]);
    }
    $routeProvider.otherwise({redirectTo: '/frontpage'});

    // REST config
    RestangularProvider.setBaseUrl('https://uk-playground-api.wuaki.tv/');
    RestangularProvider.setRequestSuffix('.json');
    RestangularProvider.setDefaultHttpFields({cache: true});

  })
  .run(['$rootScope', '$route', 'Auth', function ($rootScope, $routeProvider, authService) {
      
      $rootScope.$on("$locationChangeStart", function(event, next, current) {
        console.log('change route: ', next, current);
        console.log('auth: ', authService);
  
        for(var i in $routeProvider.routes) {
          if(next.indexOf(i) != -1) {
            console.log('need auth: ', $routeProvider.routes[i].auth);
            if($routeProvider.routes[i].auth && !authService.getUserAuthenticated()) {
              alert("You need to be authenticated to see this page!");
              event.preventDefault();
            }
          }
        }
      });
  
    }])
  .controller('AppCtrl', ['$scope', 'Restangular', function($scope, Restangular){
    Restangular.all("version").getList().then(function(data){
      $scope.api = data.api;
    });
  }]);