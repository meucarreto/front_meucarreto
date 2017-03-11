app.factory('ListAllCompanies', ['$resource', 'envService', function($resource, envService) {
	return $resource(envService.read('apiUrl') + '/companies/', {}, {
		retrieveCompanies: {
			method: 'GET',
			isArray: true
		}
	})

}])

app.factory('ListContacts', ['$resource', 'envService', function($resource, envService) {
	return $resource(envService.read('apiUrl') + '/company_contacts/', {}, {
		retrieveContacts: {
			method: 'GET',
			isArray: true
		}
	})

}])


app.controller('companiesListController', ['$scope', 'ListAllCompanies', 'ListContacts', function($scope, ListAllCompanies, ListContacts){

	$scope.seo.title = "Meu Carreto - Companies";


	ListAllCompanies.retrieveCompanies({
		filter: {
		}
	}, function(list) {
		$scope.items = [];

		angular.forEach(list, function(value, key){
			value.size = 5;
			
			ListContacts.retrieveContacts({
				filter: {
					where: {company_id: value.id}
				}
			}, function(contacts) {
				value.contact = contacts[0];
				$scope.items.push(value);
				

			}, function(erroResponse) {
				console.log(erroResponse)
			});	
		});
		console.log($scope.items);

	}, function(erroResponse) {
		console.log(erroResponse)
	});

	$scope.ga = function(i){
		ga('send', {
		  hitType: 'event',
		  eventCategory: 'Lista de transportadoras',
		  eventAction: 'Ver detalhes de transportadora',
		  eventLabel: 'Ver detalhes da transportadoras' + i
		});
	}


}]);



app.controller('companiesDetailController', ['$scope', 'ListAllCompanies', '$stateParams', 'ListContacts', function($scope, ListAllCompanies, $stateParams, ListContacts){

	$scope.seo.title = "Meu Carreto - Detalhes de " + $stateParams.slug;

	console.log($stateParams.slug);
	ListAllCompanies.retrieveCompanies({
		filter: {
			where: {
				slug: $stateParams.slug
			}
		}
	}, function(item) {
		
		$scope.company = item[0];

		ListContacts.retrieveContacts({
			filter: {
				where: {company_id: $scope.company.id}
			}
		}, function(contacts) {
			
			console.log(contacts);

			$scope.contacts = contacts;

		}, function(erroResponse) {
			console.log(erroResponse)
		});	
		
	}, function(erroResponse) {
		console.log(erroResponse)
	});


	$scope.ga = function(i){
		ga('send', {
		  hitType: 'event',
		  eventCategory: 'Detalhe da transportadora',
		  eventAction: 'Ver mais de transportadora',
		  eventLabel: 'Ver mais transportadoras'
		});

		// ga('Detalhe da transportadora', 'Ver mais', 'Ver mais transportadoras' )
	}


}]);