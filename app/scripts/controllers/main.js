'use strict';

angular.module('idrApp')
  .controller('MainCtrl', function ($scope, $resource, $location, Feeds) {
	
	//Get date in ISO format
	$scope.now = new Date();
	$scope.nowISO = $scope.now.toISOString();
	$scope.yesterday = $scope.now.getTime() - 86400000;
	$scope.yesterday = new Date($scope.yesterday);
	$scope.yesterdayISO = $scope.yesterday.toISOString();
	
    $scope.results = Feeds.query({afterDate:$scope.yesterdayISO, beforeDate:$scope.nowISO}, function(results) {
		$scope.feedList = results.results;
		$scope.allFeeds = $scope.feedList;
	});

	//Datepicker
	$scope.fromDate = $scope.yesterdayISO;
	$scope.untilDate = "";
	
	$scope.refresh = function() {
		if ($scope.untilDate == "") {
			$scope.untilDate = $scope.nowISO;
		}
		$scope.results = Feeds.query({afterDate:$scope.fromDate, beforeDate:$scope.untilDate}, function(results) {
			$scope.feedList = results.results;
			$scope.allFeeds = $scope.feedList;
		});
	};
	
	//Filter Feeds by feed status
	$scope.feedStatus = "All Feeds";
	$scope.filterFeedList = function(feedStatus) {
		$scope.filteredFeeds = [];
		if (feedStatus == "All") {
			$scope.filteredFeeds = $scope.allFeeds;
		}
		else {
			for (var i = 0; i < $scope.allFeeds.length; i++) {
				if ($scope.allFeeds[i].Feed_Status == feedStatus) {
					$scope.filteredFeeds.push($scope.allFeeds[i]);
				}
			}
		}
		return $scope.filteredFeeds;
	};
	
	$scope.filterFeeds = function() {
		if ($scope.feedStatus == "All Feeds") {
			$scope.filterFeedList("All");
			$scope.feedList = $scope.filteredFeeds;
		}
		else if ($scope.feedStatus == "Started Feeds") {
			$scope.filterFeedList("Started");
			$scope.feedList = $scope.filteredFeeds;
		}
		else if ($scope.feedStatus == "Complete Feeds") {
			$scope.filterFeedList("Complete");
			$scope.feedList = $scope.filteredFeeds;
		}
		else if ($scope.feedStatus == "Error Feeds") {
			$scope.filterFeedList("Error");
			$scope.feedList = $scope.filteredFeeds;
		}
		else {
			$scope.filterFeedList("All");
			$scope.feedList = $scope.filteredFeeds;
		}
	};
	
	$scope.feedShow = function(feedID) {
	  $location.path('/feed/' + feedID);	
	};
	
	//Sort Table Columns
	//Sort Table Columns
	$scope.reverse = false;
	$scope.oldestQueueClass = "glyphicon glyphicon-sort";
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
	
	/*$scope.feedList = [{FeedName:"test", Feed_ID:"2"}];*/
  });