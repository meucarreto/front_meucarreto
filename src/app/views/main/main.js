angular.module('test',[])

.factory('TestHeader', ['$resource', 'envService', function($resource, envService) {
    return $resource('/categories', {});
}])

app.controller('mainController', 'TestHeader', ['$scope', function($scope, TestHeader){
	
	$scope.links = [
		{link: 'leve', descricao: 'Leve'},
		{link: 'medio', descricao: 'Médio'},
		{link: 'pesado', descricao: 'Pesado'}
	];

	TestHeader.get({}, function(response) {
		console.log(response);
	});

}])