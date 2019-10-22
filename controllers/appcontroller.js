
const express = require('express')

const appRouter = express.Router()


appRouter.get('/', (req, res) => {
    res.render('./start.hbs')
  })


  appRouter.get('/checkOut', (req, res) => {
    res.render('./checkOut.hbs')
  })

module.exports = {
  appRouter
}

