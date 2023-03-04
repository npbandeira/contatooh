var express = require("express");
var load = require("express-load");
var bodyParser = require("body-parser");

module.exports = function () {
  var app = express();
  
  // variável de ambiente
  app.set("port", 3000);

  //middlewares
  app.use(express.static("./public"));
  app.set("view engine", "ejs");
  app.set("views", "./app/views");
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(require("method-override")());

  // routes
  load("models", { cwd: "app" }).then("controller").then("routes").into(app);

  return app;
};
