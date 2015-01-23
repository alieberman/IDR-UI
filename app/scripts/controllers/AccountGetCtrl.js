'use strict';

angular.module('idrApp')
  .controller('AccountGetCtrl', function ($scope, $resource, $location, $routeParams, Accounts) {
	
	/*{"accounts":{"accounts":[{"UID":"HAYDD007","directory":"ED","verifiedFlag":"UNVERIFIED","Primary":null},
	{"UID":"HAYDD007","directory":"SWNA","verifiedFlag":"UNVERIFIED","Primary":null},
	{"UID":"HAYDD007","directory":"WDW","verifiedFlag":"UNVERIFIED","Primary":null}]},
	"relationship":{"Name":"Danielle Hayden","KnownAs":"Danielle","Pernr":"00767911","Status":"ACTIVE","ID":"HAYDD007","Email":null}}*/
	
	$scope.show = false;
	
	$scope.getAccountInfo = function() {
		Accounts.get({SAPID:$scope.sapID}, function(results) {
			$scope.accountList = results.accounts.accounts;
			$scope.relationship = results.relationship;
			$scope.show = true;
		});
		return $scope.accountList, $scope.relationship, $scope.show;
	};
	
	$scope.getID = function() {
		$scope.getAccountInfo();
	};
	
	$scope.save = function() {
		Accounts.update({}, function() {
			$scope.getAccountInfo();
		});
	};

  });