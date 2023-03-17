angular.module("contatooh").controller("ContatosController", function ($scope,$http) {
  // Contatos.html

  $scope.contatos = [];
  
  $scope.filtro = '';
  
  $http.get("/contatos")
  .success(function(data){
    $scope.contatos = data
  })
  .error(function(statusText){
    console.log("Não foi possísvel obter a lista de contatos");
    console.log(statusText);
  })
 
});
