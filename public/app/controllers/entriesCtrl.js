angular.module('motoBetsApp')

.controller('entriesCtrl', function($scope, dashboardService, getContest) {
    $scope.userEntries = getContest.users;
    $scope.contest = getContest;

    dashboardService.getUser().then(function(response) {
        $scope.facebook = response.data;
    });
});
