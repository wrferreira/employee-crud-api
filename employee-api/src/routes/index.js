/**
 * arquivo: routes/index.js
 * descrição: arquivo responsável pela chamada da API na aplicação no lado do Back-end ('Employee')
 * data: 03/04/2021
 * autor: William R. Ferreira
 */

const express = require('express')

const router = express.Router()

router.get('/api', (req, res) => {
  res.status(200).send({
    success: true,
    message: "Seja bem-vindo(a) a API Node.js + PostgreSQL + Azure",
    version: '1.0.0'
  })
})

module.exports = router