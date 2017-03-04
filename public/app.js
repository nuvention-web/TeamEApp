var app = angular.module('app', ['ngRoute', 'ngResource', 'ngMaterial', 'angular.filter']).config(function($mdThemingProvider) {
  $mdThemingProvider.disableTheming();
});