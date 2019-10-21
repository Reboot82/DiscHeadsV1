
const express = require('express')

const userApi = require('../models/user.js')

const userRouter = express.Router()

userRouter.get('/user/new', (req, res) => {
  res.render('./user/newUserForm')
})

userRouter.get('/user/:userId/edit', (req, res) => {
  userApi.getUser(req.params.userId)
    .then((user) => {
      res.render('./user/editUserForm', {user})
    })
})

 //getAll
 userRouter.get('/user', (req, res) => {
  userApi.getAllUsers()
    .then((allUsers) => {
      res.render('./user/user', {allUsers})
    })
})

//getOne
userRouter.get('/user/:userId', (req, res) => {
  userApi.getUser(req.params.userId)
    .then((oneUser) => {
      res.render('./user/user', {oneUser})
    })
})

//create
userRouter.post('/user', (req, res) => {
  userApi.addNewUser(req.body)
    .then((newUser) => {
      res.redirect(`/user`)
    })
})

//update
userRouter.put('/user/:userId', (req, res) => {
  userApi.updateUser(req.params.userId, req.body)
    .then((updateduser) => {
      res.redirect(`/user`)
    })
})

//delete
userRouter.delete('/users/:userId', (req, res) => {
  userApi.deleteUser(req.params.userId)
    .then((deletedUser) => {
      res.redirect(`/users`)
    })
})


module.exports = {
  userRouter
}
