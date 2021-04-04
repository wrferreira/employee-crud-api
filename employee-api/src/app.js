/**
 * arquivo: app.js
 * descrição: arquivo responsável por fazer a execução com o arquivo 'server.js'
 * data: 03/04/2021
 * autor: William R. Ferreira
 */

const express = require('express')
const cors = require('cors')

const app = express()

// ===> Rotas da API (Employee)
const index = require("./routes/index")
//const employeeRoutes = require("./route/employee.routes")

app.use(express.urlencoded({ extended:true}))
app.use(express.json())
app.use(express.json({type: 'application/vnd.api+json'}))
app.use(cors())

app.use(index)
//app.use('/api/', employeeRoutes)

module.exports = app