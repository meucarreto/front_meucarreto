app.factory('ListAllCompanies', ['$resource', 'envService', function($resource, envService) {
	return $resource(envService.read('apiUrl') + '/companies/', {}, {
		retrieveCompanies: {
			method: 'GET',
			isArray: true
		}
	})

}])


app.controller('companiesListController', ['$scope', 'ListAllCompanies', function($scope, ListAllCompanies){

	$scope.seo.title = "Meu Carreto - Companies";


	ListAllCompanies.retrieveCompanies({
		filter: {
		}
	}, function(list) {
		$scope.items = [];

		angular.forEach(list, function(value, key){
			value.size = 5;
			$scope.items.push(value);
		});
	}, function(erroResponse) {
		console.log(erroResponse)
	});

	$scope.ga = function(i){

		alert("GA - " + i);
	}


}]);



app.controller('companiesDetailController', ['$scope', 'ListAllCompanies', function($scope, ListAllCompanies){

	$scope.seo.title = "Meu Carreto - Companies Detail";


	// ListAllCompanies.retrieveCompanies({
	// 	filter: {
	// 	}
	// }, function(list) {
	// 	$scope.items = [];

	// 	angular.forEach(list, function(value, key){
	// 		value.size = 5;
	// 		$scope.items.push(value);
	// 	});
	// }, function(erroResponse) {
	// 	console.log(erroResponse)
	// });

	$scope.ga = function(i){

		alert("GA - " + i);
	}


}]);