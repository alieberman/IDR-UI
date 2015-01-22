'use strict';
	
/* Query REST service for graph data */
angular.module('idrApp')
  .factory('Feeds', ['$resource', '$rootScope', function($resource, $rootScope) { 
	var listFeeds = $resource('/rest/idrmonitoring/batches/:id', {id:'@id'}, 
	{ post: {method: 'POST'}, 
	get: {method: 'GET'}, 
	update: {method:'PUT'}, 
	query: {method:'GET'}});
	return listFeeds;
  }]);