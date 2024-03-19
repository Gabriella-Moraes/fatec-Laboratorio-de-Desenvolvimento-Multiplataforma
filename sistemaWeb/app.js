const express = require('express');
const handlebars = require("express-handlebars").engine;
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8080;

app.engine("handlebars", handlebars({ defaultLayout: null }))
app.set("view engine", "handlebars")

app.use(express.static('node_modules/bootstrap/dist'));

app.use(bodyParser.urlencoded({ extended: true }));

let data = [
    { nome: 'João', endereco: 'Rua A, 123', bairro: 'Centro', cep: '12345-678', cidade: 'São Paulo', estado: 'SP' },
    { nome: 'Maria', endereco: 'Av. B, 456', bairro: 'Bairro X', cep: '98765-432', cidade: 'Rio de Janeiro', estado: 'RJ' }
];

app.get('/', (req, res) => {
    res.render('cadastro');
});

app.post('/cadastro', (req, res) => {
    const novoCadastro = req.body;
    data.push(novoCadastro); 
    res.redirect('/listar');
});

app.get('/listar', (req, res) => {
    res.render('listar', { data });
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});