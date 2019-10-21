
const express = require('express')

const discApi = require('../models/disc.js')

const discRouter = express.Router()

discRouter.get('/new', (req, res) => {
  res.render('./discs/newDiscForm')
})

discRouter.get('/:discId/edit', (req, res) => {
  discApi.getDisc(req.params.discId)
    .then((disc) => {
      res.render('./discs/editDiscForm', {disc})
    })
})

 //getAll
 discRouter.get('/', (req, res) => {
  discApi.getAllDiscs()
    .then((discs) => {
      res.render('./discs/discs', {discs})
    })
})

//getOne
discRouter.get('/:discId', (req, res) => {
  discApi.getDisc(req.params.discId)
    .then((disc) => {
      res.render('./discs/disc', {disc})
    })
})

//create
discRouter.post('/', (req, res) => {
  discApi.addNewDisc(req.body)
    .then((newDisc) => {
      res.redirect(`/discs`)
    })
})

//update
discRouter.put('/:discId', (req, res) => {
  discApi.updateDisc(req.params.discId, req.body)
    .then((updateddisc) => {
      res.redirect(`/discs`)
    })
})

//delete
discRouter.delete('/:discId', (req, res) => {
  discApi.deleteDisc(req.params.discId)
    .then((deletedDisc) => {
      res.redirect(`/discs`)
    })
})


module.exports = {
  discRouter
}

