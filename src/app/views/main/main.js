app.factory('ListCompaniesHome', ['$resource', 'envService', function($resource, envService) {
	return $resource(envService.read('apiUrl') + '/companies/', {}, {
		retrieveCompanies: {
			method: 'GET',
			isArray: true
		}
	})

}])

app.controller('mainController', ['$scope', '$location', 'ListCompaniesHome', function($scope, $location, ListCompaniesHome){
	
	

	$scope.seo.title = "Meu Carreto";

	ListCompaniesHome.retrieveCompanies({
		filter: {
			where: {featured_home: 1}
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

	$scope.seeMore = function(){

		$scope.ga("SEE MORE");

		$location.url('companies');
	}



}])