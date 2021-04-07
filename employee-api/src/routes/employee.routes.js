/**
 * arquivo: routes/employee-routes.js
 * descrição: arquivo responsável pelas rotas da API
 * data: 03/04/2021
 * autor: William R. Ferreira
 */

const router = require('express-promise-router')()
const employeeController = require('../controllers/employee.controller')

// ===> Definindo as rotas do CRUD - 'employee'

// ===> rota para criar um novo 'Colaborador(a)': (POST): localhost:3000/api/employees
router.post('/employees', employeeController.createEmployee)

// ===> rota responsável por listar todos os 'Colaboradores(as)': (GET): localhost:3000/api/employees
router.get('/employees', employeeController.listAllEmployees)

module.exports = router