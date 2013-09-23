  'use strict';

angular.module('yoAngularApp')
.controller('NavbarCtrl', function ($scope) {
  $scope.items = [
    {
      name: 'Películas',
      link: '#/movies'
    },
    {
      name: 'Series',
      link: '#/seasons'
    },
    {
      name: 'Selection',
      link: '#/subscription_plans'
    }
  ];
});
