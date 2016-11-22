var app = angular.module('App', ['ui.bootstrap', 'ui.router', 'ngResource', 'test]);

app
.config(['$resourceProvider', function($resourceProvider) {
	'use strict';
  	// Don't strip trailing slashes from calculated URLs
  	$resourceProvider.defaults.stripTrailingSlashes = false;
}])

// router options
.config(['$urlRouterProvider', '$locationProvider', function ($urlRouterProvider, $locationProvider) {
	'use strict';
	// $locationProvider.html5Mode(true); // allow html5mode routes (no #)
	$urlRouterProvider.otherwise(function($injector, $location){
    	$injector.get('$state').go('404');
	}); // if route not found redirect to /
}])

.config(function(envServiceProvider) {
	// set the domains and variables for each environment - if you are using GET to retrieve informations
	envServiceProvider.config({
		domains: {
			localhost: ['localhost'],
			development: ['dev.yourwebsite.com'],
			staging: ['staging.yourwebsite.com'],
			production: ['yourwebsite.com, www.yourwebsite.com']
		},
		vars: {
			localhost: {
				apiUrl: 'http://0.0.0.0:3000/api',
			},			
			development: {
				apiUrl: 'http://0.0.0.0:3000/api',
			},
			staging: {
				apiUrl: 'http://0.0.0.0:3000/api',
			},
			production: {
				apiUrl: 'http://0.0.0.0:3000/api',
			}
		}
	});
})


// after the configuration and when app runs the first time we o some more stuff
.run(['$rootScope', '$state', function ($rootScope, $state) {
	
	// this is available from all across the app
	$rootScope.appName = 'app';

	// make $state available from templates
	$rootScope.$state = $state;

	// make seo available to all views
	$rootScope.seo = {
		title: '',
		description: '',
		canonical: '',
		breadcrumb: []
	};
}]);


