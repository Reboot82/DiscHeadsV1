
const mongoose = require('./connection.js')


const DiscSchema = new mongoose.Schema({
 name: { type: String, required: true },
 photo: { type: String },
 flightNumbers: { type: String },
 firstPlayed: { type: String }
})

const DiscCollection = mongoose.model('Disc', DiscSchema)

//getAll
const getAllDiscs = () => {
  return DiscCollection.find({})
}
//getOne
const getDisc = (discId) => {
  return DiscCollection.findById(discId)
}
//create
const addNewDisc = (newDisc) => {
  return DiscCollection.create(newDisc)
}
//update
const updateDisc = (discId, updatedDisc) => {
  return DiscCollection.updateOne({_id: discId}, updatedDisc)
}
//delete
const deleteDisc = (discId) => {
  return DiscCollection.deleteOne({_id: discId})
}

module.exports = {
  getAllDiscs,
  getDisc,
  addNewDisc,
  updateDisc,
  deleteDisc
}