angular.module('contatooh').controller('ContatoController', 
// Contato.html
	function($scope, $routeParams, Contato) {
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
			$scope.contato = new Contato()
		}

		$scope.salva = function(){
			$scope.contato.$save()
			.then(function(){
				$scope.mensagem = {texto: 'Salvo com sucesso'}
				// Limpa o formulário
				$scope.contato = new Contato()
			})
			.catch(function(erro){
				$scope.mensagem = {texto: "Não foi possível salvar"}
				console.log(erro)
			})
		}
});