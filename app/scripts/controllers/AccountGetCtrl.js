'use strict';

angular.module('idrApp')
  .controller('AccountGetCtrl', function ($scope, $resource, $location, $routeParams, Accounts) {
	
	$scope.show = true;
	
	$scope.Primary = '';
	
	$scope.getAccountInfo = function() {
		Accounts.get({id:$scope.sapID}, function(results) {
			$scope.accountList = results.accounts.accounts;
			if ($scope.accountList[0].Primary != null || $scope.accountList[0].Primary != undefined) {
				$scope.Primary = $scope.accountList[0].Primary;
			}
			$scope.relationship = results.relationship;
			$scope.show = true;
		});
		return $scope.accountList, $scope.relationship, $scope.show;
	};
	
	$scope.getID = function() {
		$scope.getAccountInfo();
	};
	
	$scope.save = function() {
		Accounts.update({id:$scope.sapID, _GUID:$scope.Primary, Pernr:$scope.relationship.Pernr}, function() {
			$scope.getAccountInfo();
		});
	};
	
	$scope.changePrimary = function(newPrimaryAccount) {
		$scope.Primary = newPrimaryAccount._GUID;
	};
	
	//Sort Table Columns
	$scope.reverse = false;
	$scope.sortOrder = 'UID';
	//Order the Feeds by each column
	$scope.sort = function(newSortOrder) {
		$scope.sortOrder = newSortOrder;
	    if ($scope.sortOrder == newSortOrder) {
	    $scope.reverse = !$scope.reverse;
	    $scope.sortOrder = newSortOrder;
			if ($scope.reverse) {
			}
	        else {
				$scope.sortOrder = ('-' + newSortOrder);
			}
	    } 
	};

  });