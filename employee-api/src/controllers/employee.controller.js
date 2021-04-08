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
    console.log("select ALLLLL")
    const response = await db.query('SELECT * FROM employee')
    res.status(200).send(response.rows)
}

// ===> Método responsável por listar um determinado 'Employee' pelo id:
exports.findEmployeeById = async (req,res) => {
    console.log("select pelo ID")
    const employeeId = req.params.id
    const response = await db.query('SELECT * FROM employee WHERE employee_id = $1', [employeeId])
    res.status(200).send(response.rows)
}

// ===> Método responsável por atualizar um determinado 'Employee' pelo id:
exports.updateEmployeeById = async (req, res) => {
    const employeeId = req.params.id
    const { name, job_role, salary, birth, employee_registration } = req.body;

    const response = await db.query(
        'UPDATE employee SET name = $1, job_role = $2, salary = $3, birth = $4, employee_registration = $5 WHERE employee_id = $6', 
        [name, job_role, salary, birth, employee_registration, employeeId])
    res.status(200).send({ message: 'Employee Updated Successfully!'})       
}

// ===> Método responsável por deletar um determinado 'Employee' pelo id:
exports.deleteEmployeeById = async (req,res) => {
    const employeeId = req.params.id
    
    const response = await db.query("DELETE FROM employee WHERE employee_id = $1",[employeeId])
    res.status(200).send({ message: "Employee Deleted With Successfuly!" }) 
}