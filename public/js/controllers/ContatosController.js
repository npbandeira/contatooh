angular
  .module("contatooh")
  .controller("ContatosController", function ($scope, $resource) {
    // Contatos.html
    const Contato = $resource("/contatos/:id"); //$resouce devolve um objeto
    $scope.contatos = []

    $scope.filtro = "";

    $scope.mensagem ={texto:""}

    // Request para buscar o contatos no banco
    function buscarContatos() {
      Contato.query(
        function (contatos) {
          $scope.contatos = contatos;
          $scope.mensagem = {}
        },
        function (erro) {
          console.log(erro)
          $scope.mensagem = {texto: "Não foi possível obter a lista de contatos"}
        }
      );
    }
    buscarContatos();

    $scope.remove = function (contato) {
      Contato.delete({id: contato._id},
        buscarContatos,
        function(erro) {
          $scope.mensagem = {
            texto: "Não foi possível remover o contato"
          };

          console.log(erro)
        }
        )
    };
  });
