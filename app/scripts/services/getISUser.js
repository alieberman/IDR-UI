'use strict';
	
/* Query REST service for graph data */
angular.module('idrApp')
  .factory('ISUser', ['$resource', '$rootScope', function($resource, $rootScope) { 
	var getUser = $resource('/rest/idrusers/userISInfo/:id', {id:'@id'}, 
	{ post: {method: 'POST'}, 
	get: {method: 'GET'}, 
	update: {method:'PUT'}, 
	query: {method:'GET'}});
	return getUser;
  }]);