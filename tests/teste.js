// 1- import sequelize
const sequelize = require('sequelize')

// 2- criar um objeto contendo os dadso da conexão
const config = {
    username: "root",
    password: "03584170Myke@",
    host : "localhost",
    port : 3306,
    dialect : 'mysql',
    database : 'mydb'
}

// 3- criar a conexão   

const conexao = new sequelize(config)

// 4- realizar consulta (assíncrona!!)

let resultado = conexao.query("select * from livros")

resultado
    .then(res => console.log(res))