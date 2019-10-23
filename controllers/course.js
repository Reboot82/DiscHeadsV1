
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
      res.render('./courses/editCourseForm', {course})
    })
})

 //getAll
 courseRouter.get('/', (req, res) => {
  courseApi.getAllCourses()
    .then((courses) => {
      courses.sort(function(a, b){
        let x = a.name;
        let y = b.name;
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      });
      res.render('./courses/courses', {courses})
    })
})

//getOne
courseRouter.get('/:courseId', (req, res) => {
  courseApi.getCourse(req.params.courseId)
    .then((course) => {
      res.render('./courses/course', {course})
    })
})

//create
courseRouter.post('/', (req, res) => {
  courseApi.addNewCourse(req.body)
    .then((newCourse) => {
      res.redirect(`/courses`)
    })
})

courseRouter.put('/users/:userId/checkOut', (req, res) => {
  courseApi.getCourse(req.params.courseId)
  .then((course) => {
    course.activePlayers.push(userId)
    course.save()
    res.render('./checkOut.hbs', {user})
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

