var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phoneListControllerModule',
  'phoneDetailControllerModule',
  'phonecatFiltersModule',
  'phonecatServicesModule'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl',
        controllerAs: 'ctrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl',
        controllerAs: 'ctrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);
