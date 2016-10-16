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
            image: 'images/denverSkyLine(scale).jpg',
            id: 1,
        }, {
            image: 'images/cutOffJet(scale).jpg',
            id: 2
        }, {
            image: 'images/element.png',
            id: 3
        }
    ];
    // $scope.myInterval = 5000;
    // $scope.noWrapSlides = false;
    // $scope.active = 0;
    // var slides = $scope.slides = [];
    // var currIndex = 0;
    //
    // $scope.addSlide = function() {
    //     var newWidth = 600 + slides.length + 1;
    //     slides.push({
    //         image: [
    //             'images/denverSkyLine(scale).jpg',
    //             'images/cutOffJet(scale).jpg',
    //             'images/mileHighChauffeurLogo.png',
    //             'images/element.png'
    //         ],
    //         text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
    //         id: currIndex++
    //     });
    // };

    // $scope.randomize = function() {
    //     var indexes = generateIndexesArray();
    //     assignNewIndexesToSlides(indexes);
    // };
    //
    // for (var i = 0; i < 4; i++) {
    //     $scope.addSlide();
    // }
    //
    // // Randomize logic below
    //
    // function assignNewIndexesToSlides(indexes) {
    //     for (var i = 0, l = slides.length; i < l; i++) {
    //         slides[i].id = indexes.pop();
    //     }
    // }
    //
    // function generateIndexesArray() {
    //     var indexes = [];
    //     for (var i = 0; i < currIndex; ++i) {
    //         indexes[i] = i;
    //     }
    //     return shuffle(indexes);
    // }
    //
    // // http://stackoverflow.com/questions/962802#962890
    // function shuffle(array) {
    //     var tmp, current, top = array.length;
    //
    //     if (top) {
    //         while (--top) {
    //             current = Math.floor(Math.random() * (top + 1));
    //             tmp = array[current];
    //             array[current] = array[top];
    //             array[top] = tmp;
    //         }
    //     }
    //
    //     return array;
    // }
}

function ProjectCtrl($scope, $http) {
}

function PrivacyCtrl($scope, $http, $timeout) {
}

function AboutCtrl($scope, $http, $timeout) {
}