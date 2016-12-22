app.controller('mainController', ['$scope', function($scope){
	
	$scope.links = [
		{link: 'leve', descricao: 'Leve'},
		{link: 'medio', descricao: 'Médio'},
		{link: 'pesado', descricao: 'Pesado'}
	];

	$scope.seo.title = "Meu Carreto"

}])