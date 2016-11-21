'use strict';

/**
 * Route configuration 
 */
angular.module('App').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'app/views/main/main.html',
                controller: 'mainController'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'app/views/contact/contact.html',
                controller: 'contactController'
            });
    }
]);