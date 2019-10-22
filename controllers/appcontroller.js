
const express = require('express')

const appRouter = express.Router()


appRouter.get('/', (req, res) => {
    res.render('./start.hbs')
  })

  appRouter.get('/checkIn', (req, res) => {
    res.render('./checkIn.hbs')
  })

module.exports = {
  appRouter
}

