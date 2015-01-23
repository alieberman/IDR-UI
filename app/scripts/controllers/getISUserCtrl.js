'use strict';

angular.module('idrApp')
  .controller('GetISUserCtrl', function ($scope, $resource, $location, $routeParams, ISUser) {
	ISUser.get(function(results) {
		$scope.userIS = results.user;
	});
  });