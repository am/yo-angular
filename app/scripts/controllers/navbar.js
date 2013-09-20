  'use strict';

angular.module('app')
.controller('NavbarCtrl', function ($scope) {
  $scope.items = [
    {
      name: 'Wuaki.tv',
      link: '#/frontpage'
    },
    {
      name: 'Películas',
      link: '#/movies'
    },
    {
      name: 'Series',
      link: '#/tv-shows'
    },
    {
      name: 'Selection',
      link: '#/subscription_plans'
    }
  ];
});
