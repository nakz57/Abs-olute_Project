const mongoose = require('mongoose')

const Schema = mongoose.Schema

const programSchema = new Schema({
  title: { type: String, required: true },
  duration: {
    type: Number,
    default: 60,
    max: 120,
    min: 5
  },
  workout: {
    type: String,
    required: false
  }
})

module.exports = mongoose.model('Program', programSchema)
