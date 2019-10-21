
const express = require('express')

const courseApi = require('../models/course.js')

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

