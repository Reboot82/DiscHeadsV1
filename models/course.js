
const mongoose = require('./connection.js')


const CourseSchema = new mongoose.Schema({
 name: { type: String, required: true },
 photo: { type: String },
 difficulty: { type: String, enum: ['Easy', 'Hard', 'Pro'] },
 location: { type: String },
 activePlayers: []
})

const CourseCollection = mongoose.model('Course', CourseSchema)

//getAll
const getAllCourses = () => {
  return CourseCollection.find({})
}
//getOne
const getCourse = (courseId) => {
  return CourseCollection.findById(courseId)
}
//create
const addNewCourse = (newCourse) => {
  return CourseCollection.create(newCourse)
}
//update
const updateCourse = (courseId, updatedCourse) => {
  return CourseCollection.updateOne({_id: courseId}, updatedCourse)
}
//delete
const deleteCourse = (courseId) => {
  return CourseCollection.deleteOne({_id: courseId})
}

module.exports = {
  getAllCourses,
  getCourse,
  addNewCourse,
  updateCourse,
  deleteCourse
}
