
const mongoose = require('./connection.js')


const UserSchema = new mongoose.Schema({
 name: { type: String, required: true },
 photo: { type: String },
 ability: { type: String, enum: ['Beginner', 'Amateur', 'Pro'] },
 location: { type: String }
})

const UserCollection = mongoose.model('User', UserSchema)

//getAll
const getAllUsers = () => {
  return UserCollection.find({})
}
//getOne
const getUser = (userId) => {
  return UserCollection.findById(userId)
}
//create
const addNewUser = (newUser) => {
  return UserCollection.create(newUser)
}
//update
const updateUser = (userId, updatedUser) => {
  return UserCollection.updateOne({_id: userId}, updatedUser)
}
//delete
const deleteUser = (userId) => {
  return UserCollection.deleteOne({_id: userId})
}

module.exports = {
  getAllUsers,
  getUser,
  addNewUser,
  updateUser,
  deleteUser
}
