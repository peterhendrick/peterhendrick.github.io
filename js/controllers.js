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

// optional controllers
function HomeCtrl($scope, $http) {
    $scope.slides = [
        {
            image: 'images/denverSkyLine.jpg',
            id: 1
        },
        {
            image: 'images/cutOffJet.jpg',
            id: 2
        }
    ]
}

function ProjectCtrl($scope, $http) {
}

function PrivacyCtrl($scope, $http, $timeout) {
}

function AboutCtrl($scope, $http, $timeout) {
}