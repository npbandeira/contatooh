module.exports = function (app) {

  var controller = app.controller.contato;

  app.route("/contatos").get(controller.listaTodos);
  // .post(controller.salvaContato);
  app.route("/contatos/:id")
  .get(controller.obtemContato)
  .delete(controller.removeContato);
  
  // app.get("/contatos", controller.listaContatos);
  // // app.post("/contatos", controller.salvaContato);

  // app.get('/contatos/:id', controller.obtemContato);
  // app.delete('/contatos/:id', controller.removeContato);
};

