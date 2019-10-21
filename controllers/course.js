
const express = require('express')

const courseApi = require('../models/course.js')

const courseRouter = express.Router()

courseRouter.get('/courses/new', (req, res) => {
  res.render('./courses/newCourseForm')
})

courseRouter.get('/courses/:courseId/edit', (req, res) => {
  courseApi.getCourse(req.params.courseId)
    .then((course) => {
      res.render('./courses/editCourseForm', {course})
    })
})

 //getAll
 courseRouter.get('/courses', (req, res) => {
  courseApi.getAllCourses()
    .then((courses) => {
      res.render('./courses/courses', {courses})
    })
})

//getOne
courseRouter.get('/courses/:courseId', (req, res) => {
  courseApi.getCourse(req.params.courseId)
    .then((course) => {
      res.render('./courses/course', {course})
    })
})

//create
courseRouter.post('/courses', (req, res) => {
  courseApi.addNewCourse(req.body)
    .then((newCourse) => {
      res.redirect(`/courses`)
    })
})

//update
courseRouter.put('/courses/:courseId', (req, res) => {
  courseApi.updateCourse(req.params.courseId, req.body)
    .then((updatedcourse) => {
      res.redirect(`/courses`)
    })
})

//delete
courseRouter.delete('/courses/:courseId', (req, res) => {
  courseApi.deleteCourse(req.params.courseId)
    .then((deletedCourse) => {
      res.redirect(`/courses`)
    })
})


module.exports = {
  courseRouter
}
