angular.module('motoBetsApp')

.controller('contestCtrl', function($scope, $stateParams, $location, dashboardService, getID, $state) {
  // Riders List Arrays
  dashboardService.getTwoRiders().then(function(response) {
    $scope.twoRiders = response;
  });
  dashboardService.getFourRiders().then(function(response) {
    $scope.fourRiders = response;
  });
  // Add Rider to Pick List and delete from Rider List

  $scope.pickRider = function (index) {
      $scope.four = index;
  };
  $scope.pickRiderTwo = function (index) {
    $scope.two = index;
  };
  $scope.twoArr = [{fake: "Pick 250 Class Rider", fake_pic: "https://www.coursesites.com/webapps/Bb-sites-course-creation-BBLEARN/images/emptyImage.png"}];
  $scope.fourArr = [{fake: "Pick 450 Class Rider", fake_pic: "https://www.coursesites.com/webapps/Bb-sites-course-creation-BBLEARN/images/emptyImage.png"}];
  $scope.pushRider = function (index) {
      $scope.twoArr.push($scope.twoRiders[index]);
  };

  $scope.pushRiderFour = function (index) {
      $scope.fourArr.push($scope.fourRiders[index]);
  };

  dashboardService.getUser().then(function(response) {
      $scope.facebook = response.data;
  });
  dashboardService.getBets().then(function(response) {
      $scope.bets = response.data;
  });
  $scope.submit = function(name, four, two) {
      var url = $location.path();
      dashboardService.submit(url, name, four, two);
  };
  dashboardService.getBets().then(function(response) {
      $scope.bets = response.data;
  });
  $scope.toDash = function () {
    $state.go('dashEntries', {contestID: getID});
  };
  // $scope.entriesByUser = getEntries;
});
