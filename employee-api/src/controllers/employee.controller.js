/**
 * arquivo: controllers/employee.js
 * descrição: arquivo responsável pela lógica do CRUD API
 * data: 03/04/2021
 * autor: William R. Ferreira
 */

const db = require('../config/database')

// ===> Método responsável por criar um novo 'Employee':
exports.createEmployee = async(req, res) => {
    const { name, job_role, salary, birth, employee_registration } = req.body
    const { rows } = await db.query(
        "INSERT INTO employee (name, job_role, salary, birth, employee_registration) VALUES ($1, $2, $3, $4, $5)",
        [name, job_role, salary, birth, employee_registration]
    )

    res.status(201).send({
        message: 'Employee adicionado com sucesso.',
        body: {
            employee: {name, job_role, salary, birth, employee_registration}
        }
    })
}    