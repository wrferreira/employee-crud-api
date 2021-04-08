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

// ===> rota responsável por listar um determinado 'Colaborador(a)' por ID: (GET): localhost:3000/api/employees/:id
router.get('/employees/:id', employeeController.findEmployeeById)

// ===> rota responsável por atualizar um determinado 'Colaborador(a)' por ID: (PUT): localhost:3000/api/employees/:id
router.put('/employees/:id', employeeController.updateEmployeeById)

// ===> rota responsável por deletar um determinado 'Colaborador(a)' por ID: (): localhost:3000/api/employees/:id
router.delete('/employees/:id', employeeController.deleteEmployeeById)

module.exports = router