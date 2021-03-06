'use strict';
	
/* Query REST service for graph data */
angular.module('idrApp')
  .factory('Accounts', ['$resource', '$rootScope', function($resource, $rootScope) { 
	var getAccounts = $resource('/rest/idrusers/setPrimary/:id/accounts', {id:'@id'}, 
	{ post: {method: 'POST'}, 
	get: {method: 'GET'}, 
	update: {method:'PUT'}, 
	query: {method:'GET'}});
	return getAccounts;
  }]);