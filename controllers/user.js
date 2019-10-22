
const express = require('express')

const userApi = require('../models/user.js')
const courseApi = require('../models/course.js')

const userRouter = express.Router()


userRouter.get('/:userId/checkIn', (req, res) => {
  userApi.getUser(req.params.userId)
  .then((user) => {
    courseApi.getAllCourses()
      .then((allCourses) => {
        res.render('./checkIn.hbs', {user, allCourses})

      })
  })
})

userRouter.get('/:userId/checkOut', (req, res) => {
  userApi.getUser(req.params.userId)
  .then((user) => {
    res.render('./checkOut.hbs', {user})
  })
})

userRouter.get('/new', (req, res) => {
  res.render('./users/newUserForm')
})

userRouter.get('/:userId/edit', (req, res) => {
  userApi.getUser(req.params.userId)
    .then((user) => {
      res.render('./users/editUserForm', {user})
    })
})

 //getAll
 userRouter.get('/', (req, res) => {
  userApi.getAllUsers()
    .then((users) => {
      users.sort(function(a, b){
        let x = a.name;
        let y = b.name;
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      });
      res.render('./users/users', {users})
    })
})

//getOne
userRouter.get('/:userId', (req, res) => {
  userApi.getUser(req.params.userId)
    .then((user) => {
      res.render('./users/user', {user})
    })
})

//create
userRouter.post('/', (req, res) => {
  userApi.addNewUser(req.body)
    .then((newUser) => {
      res.redirect(`/users`)
    })
})

//update
userRouter.put('/:userId', (req, res) => {
  userApi.updateUser(req.params.userId, req.body)
    .then((updateduser) => {
      res.redirect(`/users`)
    })
})

//delete
userRouter.delete('/:userId', (req, res) => {
  userApi.deleteUser(req.params.userId)
    .then((deletedUser) => {
      res.redirect(`/users`)
    })
})


module.exports = {
  userRouter
}
