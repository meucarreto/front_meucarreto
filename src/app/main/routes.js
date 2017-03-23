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
            .state('embreve', {
                url: '/embreve',
                templateUrl: 'app/views/embreve/embreve.html',
                controller: 'embreveController'
            })
            .state('home', {
                url: '/',
                templateUrl: 'app/views/main/main.html',
                controller: 'mainController'
            })
            .state('contact', {
                url: '/contato',
                templateUrl: 'app/views/contact/contact.html',
                controller: 'contactController'
            })
            .state('meucarreto', {
                url: '/meucarreto',
                templateUrl: 'app/views/meucarreto/meucarreto.html',
                controller: 'meuCarretoController'
            })
            .state('list', {
                url: '/listagem/:slug',
                templateUrl: 'app/views/categoryList/contact.html',
                controller: 'contactController'
            })
            .state('companiesList', {
                url: '/transportadora',
                templateUrl: 'app/views/companies/list.html',
                controller: 'companiesListController'
            })
            .state('companiesDetail', {
                url: '/transportadora/:slug',
                templateUrl: 'app/views/companies/detail.html',
                controller: 'companiesDetailController'
            });
    }
]);