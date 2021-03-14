const express = require("express");
const routes = express.Router();

const ContatosController = require("./controllers/ContatosController");
const ProdutoresController = require("./controllers/ProdutoresController");

routes.get("/api/contatos", ContatosController.index);
routes.get("/api/contatos/:id", ContatosController.getById);
routes.post("/api/contatos", ContatosController.store);
routes.put("/api/contatos/:id", ContatosController.update);
routes.delete("/api/contatos/:id", ContatosController.delete);

routes.get("/api/produtores", ProdutoresController.index);
routes.get("/api/produtores/:id", ProdutoresController.getById);
routes.post("/api/produtores", ProdutoresController.store);
routes.put("/api/produtores/:id", ProdutoresController.update);
routes.delete("/api/produtores/:id", ProdutoresController.delete);

module.exports = routes;
