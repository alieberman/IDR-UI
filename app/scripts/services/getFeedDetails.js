'use strict';
	
/* Query REST service for graph data */
angular.module('idrApp')
  .factory('Feed', ['$resource', '$rootScope', function($resource, $rootScope) { 
	var getFeedByID = $resource('/rest/idrmonitoring/feeds/:id', {id:'@id'}, 
	{ post: {method: 'POST'}, 
	get: {method: 'GET'}, 
	update: {method:'PUT'}, 
	query: {method:'GET'}});
	return getFeedByID;
  }]);