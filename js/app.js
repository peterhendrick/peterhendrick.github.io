/**
 *
 * Responsive website using AngularJS
 * http://www.script-tutorials.com/responsive-website-using-angularjs/
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Script Tutorials
 * http://www.script-tutorials.com/
 */

'use strict';

// angular.js main app initialization
angular.module('mileHighChauffeur', ['ngRoute', 'ngAnimate', 'ui.bootstrap'])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider.when('/', {
        templateUrl: 'pages/index.html',
        activetab: 'projects',
        controller: HomeCtrl
    }).when('/services/:serviceId', {
        templateUrl: function (params) {
            return 'pages/' + params.serviceId + '.html';
        },
        controller: ProjectCtrl,
        activetab: 'services'
    }).when('/about', {
        templateUrl: function() {
            return 'pages/about.html'
        },
        controller: AboutCtrl,
        activetab: 'about'
    }).otherwise({redirectTo: '/'});

    // $locationProvider.html5Mode(true);

}]).run(['$rootScope', '$http', '$browser', '$timeout', '$route', '$window', function ($scope, $http, $browser, $timeout, $route, $window) {

    $scope.$on("$routeChangeSuccess", function (scope, next, current) {
        $scope.part = $route.current.activetab;
        $window.scrollTo(0, 0);
        $scope.carouselFlag = ($route.current.loadedTemplateUrl === 'pages/index.html');
        if($scope.carouselFlag) {
            $scope.contactName = '';
            $scope.email = '';
            $scope.message = '';
        }
    });

    // onclick event handlers
    $scope.showForm = function () {
        $('.contactRow').slideToggle();
    };
    $scope.closeForm = function () {
        $('.contactRow').slideUp();
    };
}]);

// app.config(['$locationProvider', function ($location) {
// }]);

