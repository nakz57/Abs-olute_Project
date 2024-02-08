const mongoose = require('mongoose')

const Schema = mongoose.Schema

const opinionSchema = new Schema({
  comment: {
    type: String,
    required: true
  },
  like: {
    type: Boolean, 
    default: true,
    required: true
  }
  }, {
    timestamps: true
  })

  module.exports = mongoose.model('Opinion', opinionSchema)