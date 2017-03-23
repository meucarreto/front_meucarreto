var app = angular.module('App', ['ui.bootstrap', 'ui.router', 'ngResource', 'angular-loading-bar', 'environment', 'ngCookies']);

app
.config(['$resourceProvider', function($resourceProvider) {
	'use strict';
  	// Don't strip trailing slashes from calculated URLs
  	$resourceProvider.defaults.stripTrailingSlashes = false;
}])

// router options
.config(['$urlRouterProvider', '$locationProvider', function ($urlRouterProvider, $locationProvider) {
	'use strict';
	$locationProvider.html5Mode(true); // allow html5mode routes (no #)
	$urlRouterProvider.otherwise(function($injector, $location){
    	$injector.get('$state').go('404');
	}); // if route not found redirect to /
}])

.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.latencyThreshold = 10;
    cfpLoadingBarProvider.parentSelector = '#loading-bar-container';
    cfpLoadingBarProvider.spinnerTemplate = '<div><span class="fa fa-spinner">Carregando seu conteúdo...</div>';
    cfpLoadingBarProvider.includeSpinner = false;
    cfpLoadingBarProvider.includeBar = true;
  }])

.config(function(envServiceProvider) {
	// set the domains and variables for each environment - if you are using GET to retrieve informations
	envServiceProvider.config({
		domains: {
			development: ['localhost'],
			production: ['http://54.237.238.232']
		},
		vars: {
			development: {
				apiUrl: 'http://api.meucarreto.com.br/api',
			},			
			production: {
				apiUrl: 'http://api.meucarreto.com.br/api',
			}
		}
	});
	envServiceProvider.check();
})

.config(['$httpProvider', 'envServiceProvider', function($httpProvider, envServiceProvider){
	'use strict';

	// Code bellow sets all behaviors on all calls, for headers and calls errors tretaments
	$httpProvider.interceptors.push(function($q, $cookies, $location, $rootScope) {
		return {
			'request': function(config) {
				// Configurates header "token" to user in all calls, token is stored in user cookie (check app/login/login.js)
				config.headers['token'] = $cookies.get('accessToken');
				config.headers['Accept'] = 'application/json';
				config.headers['Content-Type'] = 'application/json';
				return config;
			},
			'response': function(response) {
				// console.log(response.statusText);
				// console.log(response.status);
				// $rootScope.response = response;
				// If response is anything differente than OK, removes token, and sends user to login again
				// if (response.status > 400) {$location.path('/login')};

				return response;
			},
			'requestError': function(rejection) {
				// SE ALGUMA CHAMADA REJEITADA, ENVIA PARA LOGIN E REMOVE COOKIE
		     	$location.path('login');
		     	// $cookies.remove('accessToken');
		     	alert('requestError');

		      return $q.reject(rejection);
		    },
		    'responseError': function(rejection) {
		    	// SE ALGUMA CHAMADA REJEITADA, ENVIA PARA LOGIN E REMOVE COOKIE
		     // $location.path('login');
		     	// $cookies.remove('accessToken');
		     	alert('responseError');

		      return $q.reject(rejection);
		    },
		};
	});

}])
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


app.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});

