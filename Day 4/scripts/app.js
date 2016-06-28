/*  1) angular module
    2) load ngRoute model
 */
var hrApp = angular.module('hrApp', ['ngRoute']);

hrApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
        /* Create the '/color' route */
        .when('/colors', {
            templateUrl: 'views/colors.html',
            controller: 'ColorsController'
        })
        .when('/forms', {
            templateUrl: 'views/form.html',
            controller: 'FormsController'
        })
        .otherwise({
         redirectTo: '/'
         });
}]);

