'use strict';

/**
 * @ngdoc overview
 * @name idrApp
 * @description
 * # idrApp
 *
 * Main module of the application.
 */
angular
  .module('idrApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'mgcrea.ngStrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
	  .when('/feed/:id', {
        templateUrl: 'views/feedShow.html',
        controller: 'FeedShowCtrl'
      })
	  .when('/accounts', {
        templateUrl: 'views/accounts.html',
        controller: 'AccountGetCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
