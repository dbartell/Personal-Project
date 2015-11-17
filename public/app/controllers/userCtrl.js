angular.module('motoBetsApp')

.controller('userCtrl', function($scope, dashboardService, getUser, getEntries) {
   dashboardService.getUser().then(function(response) {
      $scope.facebook = response.data;
  })
  $scope.entriesByUser = getEntries;
  $scope.user = getUser;
})
