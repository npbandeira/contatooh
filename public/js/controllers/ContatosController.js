angular.module("contatooh").controller("ContatosController", function ($scope,$resource) {
  // Contatos.html
  const Contato = $resource('/contatos'); //$resouce devolve um objeto
  
  $scope.filtro = '';
  
  function buscarContatos(){
    Contato.query(function (contatos){
      $scope.contatos = contatos
    },
    function(erro){
      console.log("Não foi possível obeter a lista de contatos");
    }
    )
  }
  buscarContatos();

 
});
