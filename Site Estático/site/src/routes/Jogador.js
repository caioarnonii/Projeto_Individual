var express = require("express");
var router = express.Router();

var JogadorController = require("../controllers/JogadorController");

router.get("/", function (req, res) {
    JogadorController.testar(req, res);
});

router.get("/listar", function (req, res) {
    JogadorController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de JogadorController.js
router.post("/cadastrar", function (req, res) {
    JogadorController.cadastrar(req, res);
})

router.post("/votar", function (req, res) {
    JogadorController.votar(req, res);
})

router.post("/autenticar", function (req, res) {
    JogadorController.entrar(req, res);
});

router.get("/listarVotos", function (req, res) {
    JogadorController.listarVotos(req, res);
});


module.exports = router;