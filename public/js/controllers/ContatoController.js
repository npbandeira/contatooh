angular.module('contatooh').controller('ContatoController', 
// Contato.html
	function($scope, $routeParams, $resource) {
		const Contato = $resource("/contatos/:id")

		// registro do contato selecionando

		if($routeParams.contatoId){
			Contato.get({id: $routeParams.contatoId},
				function(contato){
					$scope.contato = contato;
				},
				function(erro) {
					$scope.mensagem = {
						text: "Não foi possível obter o contato. "
					}
					console.log(erro)
				}
			)
		}else{
			// Novo contato
			$scope.contato = {}
		}
});