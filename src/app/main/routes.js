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
                templateUrl: 'app/views/embreve/embreve.html',
                controller: 'embreveController'
            })
            .state('home', {
                url: '/home',
                templateUrl: 'app/views/main/main.html',
                controller: 'mainController'
            })
            .state('contact', {
                url: '/contato',
                templateUrl: 'app/views/contact/contact.html',
                controller: 'contactController'
            })
            .state('list', {
                url: '/listagem/:slug',
                templateUrl: 'app/views/categoryList/contact.html',
                controller: 'contactController'
            });
    }
]);