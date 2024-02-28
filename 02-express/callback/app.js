const express = require('express')
const app = express()

app.listen(8081, function(){
    console.log("Servidor Ativo!")
})

app.get("/", function(req, res){
    res.send("Seja bem vindo ao Node JS")
})

//concatenar uma requisição
app.get("/cadastrar/:item/:quantidade", function(req, res){
    res.send("Pagina de cadastro - Item: " + req.params.item + " - Quantidade: " + req.params.quantidade) 
})

app.get("/contato", function(req, res){
    res.send("Pagina de contato")
})