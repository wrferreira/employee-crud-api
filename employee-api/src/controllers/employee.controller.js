/**
 * arquivo: controllers/employee.js
 * descrição: arquivo responsável pela lógica do CRUD API
 * data: 03/04/2021
 * autor: William R. Ferreira
 */

const db = require('../config/database')

// ===> Método responsável por criar um novo 'Employee':
exports.createEmployee = async (req, res) => {
    const { name, job_role, salary, birth, employee_registration } = req.body;
    try {
      const { rows } = await db.query(
        "INSERT INTO employee (name, job_role, salary, birth, employee_registration) VALUES ($1, $2, $3, $4, $5)",
        [name, job_role, salary, birth, employee_registration]
      );
      res.status(201).send({
        message: "Employee added successfully!",
        body: {
          employee: { name, job_role, salary, birth, employee_registration },
        },
      });
    } catch (error) {
      console.error('createEmployee', error);
      res.status(500).send({
        message: error 
      });
    }
  };
  
// ===> Método responsável por listar todos os 'Employees':
exports.listAllEmployees = async (req, res) => {
    const response = await db.query('SELECT * FROM employee ORDER BY name ASC')
    res.status(200).send(response.row)
}

// ===> Método responsável por listar um determinado 'Employee' pelo id:
exports.findEmployeeById = async (req,res) => {
    const employeeId = req.params.id
    const response = await db.query('SELECT * FROM employee WHERE employee_id = $1', [employeeId])
    res.status(200).send(response.rows)
}