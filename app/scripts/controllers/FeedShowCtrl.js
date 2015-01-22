'use strict';

angular.module('idrApp')
  .controller('FeedShowCtrl', function ($scope, $resource, $location, $routeParams, Feed) {
	
	//Back button
	$scope.back = function() {
	  $location.path('/');	
	};
	
	//Get list of feeds
	$scope.feedStats = Feed.get({id:$routeParams.id});
	
	//Update Feed
	$scope.success = false;
	$scope.failure = false
	$scope.save = function() {
		Feed.update({id: $routeParams.id, Feed_Name:$scope.feedStats.Feed_Name, Feed_Type:$scope.feedStats.Feed_Type, Feed_Subtype:$scope.feedStats.Feed_Subtype,
			Feed_Source:$scope.feedStats.Feed_Source, Feed_Run_Mode:$scope.feedStats.Feed_Run_Mode, Max_Threshold_Percentage:$scope.feedStats.Max_Threshold_Percentage,
			Max_Threshold_Record_Count:$scope.feedStats.Max_Threshold_Record_Count, Last_Run_Count:$scope.feedStats.Last_Run_Count, 
			Last_Run_DateTime:$scope.feedStats.Last_Run_DateTime}, function() {
				$scope.success = true;
				$scope.feedForm.$setPristine();
				$scope.feedStats = Feed.get({id:$routeParams.id});
			}, function() {
				$scope.failure = true;
				$scope.feedForm.$setPristine();
			});
	};
  });