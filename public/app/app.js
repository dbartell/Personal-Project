angular.module('motoBetsApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/landing');

    $stateProvider
    .state('dash', {
        url: '/dash',
        templateUrl: "app/views/dash.html",
        controller: "dashboardCtrl",
        resolve: {
            getUser: function(dashboardService) {
                return dashboardService.getUser().then(function(res){
                    return res.data;
                });
            },
            getID: function($stateParams) {
                return $stateParams.contestID;
            }
        }
    })
    .state('dashDetail', {
        url: '/dash/:contestID',
        controller: "contestCtrl",
        templateUrl: 'app/views/dashID.html',
        resolve: {
            getID: function($stateParams) {
                console.log($stateParams.contestID);
                return $stateParams.contestID;
            }
        }
    })
    .state('dashEntries', {
      url: '/dash/:contestID/entries',
      controller: 'entriesCtrl',
      templateUrl: 'app/views/entries.html',
      resolve: {
        getContest: function(dashboardService, $stateParams) {
          return dashboardService.getEntries($stateParams.contestID).then(function(res) {
            return res.data;
          });
        }
      }
    })
    .state('user', {
        url: '/user/:id',
        templateUrl: "app/views/user.html",
        controller: "userCtrl",
        resolve: {
            getUser: function(dashboardService) {
                return dashboardService.getUser().then(function(res){
                    return res.data;
                });
            },
            getEntries: function(dashboardService, $stateParams) {
                return dashboardService.getEntriesByUser($stateParams.id).then(function(res){
                    return res.data;
                });
            }
        }
    })
    .state('landing', {
        url: '/landing',
        templateUrl: "app/views/landing.html"
    });

});
