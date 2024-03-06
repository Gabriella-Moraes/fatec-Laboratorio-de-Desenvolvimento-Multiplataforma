//npm install express-handlebars --save
//npm install express

//importa o módulo 'express' do Node.js. O 'express' é um framework web para Node.js que simplifica o processo de criação de aplicativos web.
const express = require("express")
//você cria uma instância do aplicativo Express chamada 'app'. Todas as funções e métodos do Express serão chamados em cima dessa instância.
const app = express()
//Aqui, você importa o módulo 'express-handlebars' que é um mecanismo de visualização (view engine) para Express.js. Ele permite renderizar arquivos de modelo (templates) usando o Handlebars.
const handlebars = require("express-handlebars").engine

//Esta linha configura o mecanismo de visualização (view engine) para utilizar o Handlebars como mecanismo de template. Ele define o layout padrão como "main".
app.engine("handlebars", handlebars({defaultLayout: "main"}))
//Aqui, você define o mecanismo de visualização (view engine) para o Express usar o Handlebars.
app.set("view engine", "handlebars")

//Esta linha define uma rota GET para a raiz ("/") do servidor.
app.get("/", function(req, res){
    res.render("primeira_pagina")
})

//Aqui, você inicia o servidor Express e faz ele escutar na porta 8081.
app.listen(8081, function(){
    console.log("Servidor Ativo!")
})