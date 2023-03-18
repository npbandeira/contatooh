angular
  .module("contatooh")
  .controller("ContatosController", function ($scope, $resource) {
    // Contatos.html
    const Contato = $resource("/contatos/:id"); //$resouce devolve um objeto

    $scope.filtro = "";

    function buscarContatos() {
      Contato.query(
        function (contatos) {
          $scope.contatos = contatos;
        },
        function (erro) {
          console.log("Não foi possível obeter a lista de contatos");
          console.log(erro)
        }
      );
    }
    buscarContatos();

    $scope.remove = function (contato) {
      Contato.delete({id: contato._id},
        buscarContatos,
        function(erro) {
          console.log("Não foi possível remover o contato")
          console.log(erro)
        }
        )
    };
  });
