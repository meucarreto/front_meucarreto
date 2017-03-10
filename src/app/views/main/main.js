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

		// ga('send', {
		//   hitType: 'event',
		//   eventCategory: 'Home',
		//   eventAction: 'Ver detalhes de transportadora',
		//   eventLabel: 'Ver detalhes da transportadoras' + i
		// });
		ga('Home', 'Ver detalhes de transportadora', 'Ver detalhes da transportadoras' + i, i)
	}

	$scope.seeMore = function(){

		// ga('send', {
		//   hitType: 'event',
		//   eventCategory: 'Home',
		//   eventAction: 'Ver mais',
		//   eventLabel: 'Ver mais transportadoras'
		// });

		ga('Home', 'Ver mais', 'Ver mais transportadoras' )

		$location.url('transportadora');
	}



}])