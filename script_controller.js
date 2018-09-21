(function() {

    var app = angular.module("githubViewer", []);

    var mainController = function($scope, $http) {

      var onUserComplete = function(response) {
        $scope.user = response.data;
      };

      var onError = function(reason) {
        $scope.error = "Could not fetch the user... sorry!";
      };

      $http.get("https://api.github.com/users/sgalla1994")
        .then(onUserComplete, onError);

      $scope.message = "this is a controller demo";
      $scope.personfirstname = "Sham",
      $scope.personlastname = "Galla"
      $scope.personimagesrc = "https://www.linkedin.com/in/shaminder-galla-b43b8013a/detail/photo/"

    };
    
      app.controller("mainController", mainController);

}());