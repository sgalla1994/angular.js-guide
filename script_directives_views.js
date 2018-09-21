(function() {

  var app = angular.module("githubViewer", []);

  var mainController = function($scope, $http, $interval, $log, $anchorScroll, $location) {

    var onUserComplete = function(response) {
      $scope.user = response.data;
      $http.get($scope.user.repos_url)
        .then(onRepos, onError);
    };

    var onRepos = function(response) {
      $scope.repos = response.data;
      $location.hash("api-result");
      $anchorScroll();
    };

    var onError = function(reason) {
      $scope.error = "Could not fetch the data requested... sorry!";
    };

    var decrementCountdown = function() {
      $scope.countdown -= 1;
      if ($scope.countdown < 1) {
        $scope.search($scope.username);
      }
    };

    var countdownInterval = null;
    var startCountdown = function() {
      countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
    };

    $scope.search = function(username) {
      $log.info("searching for" + username);
      $http.get("https://api.github.com/users/" + username)
        .then(onUserComplete, onError);
      if (countdownInterval) {
        $interval.cancel(countdownInterval);
        $scope.countdown = null;
      }

    };

    $scope.message = "this is a controller demo";
    $scope.personfirstname = "Sham";
    $scope.personlastname = "Galla";
    $scope.personimagesrc = "https://www.linkedin.com/in/shaminder-galla-b43b8013a/detail/photo/";
    $scope.repoSortOrder = "-stargazers_count";
    $scope.countdown = 60;
    startCountdown();
    $scope.username = "angular";

  };

  app.controller("mainController", ["$scope", "$http", "$interval", "$log", "$anchorScroll", "$location", mainController]);

}());