const Sequelize = require("sequelize")
const express = require('express');


// Cria uma instância do Sequelize e configura a conexão com o banco de dados
const sequelize = new Sequelize("dsm","root","admin123",{
    host: "localhost",
    dialect: "mysql"
})

// Testa a conexão com o banco de dados
sequelize.authenticate().then(function(){
    console.log("Conectado com Sucesso!")
}).catch(function(erro){
    console.log("Falha ao conectar: " + erro)
})

// Define um modelo para a tabela "agendamentos" no banco de dados
const agendamentos = sequelize.define("agendamentos",{
    nome:{
        type: Sequelize.STRING
    },
    endereco:{
        type: Sequelize.STRING
    },
    bairro:{
        type: Sequelize.STRING
    },
    cep:{
        type: Sequelize.STRING
    },
    cidade:{
        type: Sequelize.STRING
    },
    estado:{
        type: Sequelize.STRING
    },
    observacao:{
        type: Sequelize.STRING
    }
})

// Sincroniza o modelo com o banco de dados. Se {force: true}, isso irá recriar a tabela
agendamentos.sync({force: true})

// Cria uma entrada na tabela "agendamentos"
// agendamentos.create({
//     nome: "Jeferson Roberto de Lima",
//     endereco: "Av Aguia de Haia, 2700",
//     bairro: "Jd São Nicolau",
//     cep: "08240-000",
//     cidade: "São Paulo",
//     estado: "SP",
//     observacao: "Teste para aula"
// })

//Utilizamos o Express.js para criar o servidor e definir rotas.
const app = express();
app.use(express.json());

// Rota para cadastrar um novo agendamento
app.get('/cadastrar', async (req, res) => {
    try {
        // Extrai os parâmetros da URL
        const { nome, endereco, bairro, cep, cidade, estado, observacao } = req.query;

        // Insere os dados na tabela de agendamentos
        const novoAgendamento = await agendamentos.create({
            nome,
            endereco,
            bairro,
            cep,
            cidade,
            estado,
            observacao
        });

        // Retorna o novo agendamento criado
        res.json(novoAgendamento);
    } catch (error) {
        // Retorna um erro caso ocorra algum problema
        console.error(error);
        res.status(500).json({ error: 'Erro ao cadastrar agendamento' });
    }
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

//http://localhost:3000/cadastrar?nome=NomeCompleto&endereco=EnderecoCompleto&bairro=Bairro&cep=CEP&cidade=Cidade&estado=Estado&observacao=Observacao
