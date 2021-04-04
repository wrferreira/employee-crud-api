/**
 * arquivo: config/database.js
 * descrição: arquivo responsável pelas 'conectionsStrings' (Cosmos DB & PostgreSQL)
 * data: 03/04/2021
 * autor: William R. Ferreira
 */

const {Pool} = require('pg')
const dotEnv = require('dotenv')

dotEnv.config()

// ===> Conexão com a base de dados
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
})

pool.on('error',(err, client)=>{
    console.log("Erro inesperado. err:", err)
    process.exit(-1)
})
pool.on('connect',() =>{
    console.log("Base de dados conectado com sucesso!")
})

module.exports = {
    query: (text, params) => pool.query(text, params)
}