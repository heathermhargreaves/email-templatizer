angular.module('app')
  .config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

  .state('login', {
    url: '/login',
    cache: false,
    // templateUrl: './views/login.html',
    // controller: 'loginCtrl'
  })

  .state('dashboard', {
    url: '/dashboard',
    cache: false,
    templateUrl: './views/dashboard.html',
    // controller: 'loginCtrl'
  })

  .state('email-creator', {
    url: '/email-creator',
    cache: false,
    templateUrl: './views/email-creator.html',
    controller: 'emailCtrl'
  });



}); //end router
