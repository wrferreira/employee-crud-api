/**
 * arquivo: routes/employee-routes.js
 * descrição: arquivo responsável pelas rotas da API
 * data: 03/04/2021
 * autor: William R. Ferreira
 */

const router = require('express-promise-router')
const { route } = require('.')
const employeeController = require('../controllers/employee.controller')

// ===> Definindo as rotas do CRUD - 'employee'

// ===> rota por criar um novo colaborador(a) : (POST): localhost:3000/api/employee
route.post('/employee',employeeController.createEmployee)

module.exports = router