angular.module('motoBetsApp')

.controller('dashboardCtrl', function($scope, $stateParams, dashboardService, getID, $state, getUser) {
  dashboardService.getBets().then(function(response) {
      $scope.bets = response.data;
  });
  dashboardService.getUser().then(function(response) {
      $scope.facebook = response.data;
  });
  $scope.addContest = function(id, race, four_pick, two_pick, displayName) {
    dashboardService.addContest().then(function(id, race, four_pick, two_pick, displayName) {
    });
    };
    $scope.toDash = function () {
      $state.go('dashEntries', {contestID: getID});
    };
    $scope.user = getUser;
  });
