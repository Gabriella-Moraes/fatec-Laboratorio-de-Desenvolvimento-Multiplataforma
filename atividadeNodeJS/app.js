const express = require('express')
const app = express()

app.listen(8081, function(){
    console.log("Servidor Ativo!")
})

app.get("/", function(req, res){
    res.send("Seja bem vindo")
})

app.get("/produtos/:automovel/:marca/:modelo/:ano", function(req, res){
    res.send("Pagina de produtos - Automovel: " + req.params.automovel + " - Marca: " + req.params.marca + " - Modelo: " + req.params.modelo + " - Ano: " + req.params.ano)   
})

app.get("/cadastrar/:usuario/", function(req, res){
    res.send("Pagina de cadastro - Usuario: " + req.params.usuario)
})

app.get("/contato", function(req, res){
    res.send("Pagina de contato")
})