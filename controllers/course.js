
const express = require('express')

const courseApi = require('../models/course.js')
const userApi = require('../models/user.js')


const courseRouter = express.Router()

courseRouter.get('/new', (req, res) => {
  res.render('./courses/newCourseForm')
})

courseRouter.get('/:courseId/edit', (req, res) => {
  courseApi.getCourse(req.params.courseId)
    .then((course) => {
      res.render('./courses/editCourseForm', { course })
    })
})

//getAll
courseRouter.get('/', (req, res) => {
  courseApi.getAllCourses()
    .then((courses) => {
      courses.sort(function (a, b) {
        let x = a.name;
        let y = b.name;
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;
      });
      res.render('./courses/courses', { courses })
    })
})

//getOne
courseRouter.get('/:courseId', (req, res) => {
  courseApi.getCourse(req.params.courseId)
    .then((course) => {
      res.render('./courses/course', { course })
    })
})

//create
courseRouter.post('/', (req, res) => {
  courseApi.addNewCourse(req.body)
    .then((newCourse) => {
      res.redirect(`/courses`)
    })
})

courseRouter.put('/users/:userId/checkIn', (req, res) => {
  courseApi.getCourse(req.body.courseId)
    .then((singleCourse) => {
      userApi.getUser(req.body.activePlayer)
        .then((user) => {
          singleCourse.activePlayers.push(user.name)
          singleCourse.save()
          res.redirect(`/courses/users/${req.params.userId}/${singleCourse._id}/checkOut`)
        })
    })
})
courseRouter.put('/users/:userId/:courseId/checkOut', (req, res) => {
  courseApi.getCourse(req.params.courseId)
    .then((singleCourse) => {
      userApi.getUser(req.body.activePlayer)
        .then((user) => {
          for (let i = 0; i < singleCourse.activePlayers.length; i++) {
            if (user.name === singleCourse.activePlayers[i]) {
              singleCourse.activePlayers.splice(i, 1)
            }
            singleCourse.save()
          }
          res.redirect(`/users/${req.params.userId}`)
        })
    })
})

courseRouter.get('/users/:userId/:courseId/checkOut', (req, res) => {
  courseApi.getCourse(req.params.courseId)
    .then((singleCourse) => {
      userApi.getUser(req.params.userId)
        .then((user) => {

          res.render('./checkOut.hbs', { user, singleCourse })
        })
    })
})


//update
courseRouter.put('/:courseId', (req, res) => {
  courseApi.updateCourse(req.params.courseId, req.body)
    .then((updatedcourse) => {
      res.redirect(`/courses`)
    })
})

//delete
courseRouter.delete('/:courseId', (req, res) => {
  courseApi.deleteCourse(req.params.courseId)
    .then((deletedCourse) => {
      res.redirect(`/courses`)
    })
})


module.exports = {
  courseRouter
}

