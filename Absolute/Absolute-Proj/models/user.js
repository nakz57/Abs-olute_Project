const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userDetailSchema = new Schema({
  weight: { type: Number, required: true },
  age: { type: Number, required: true },
  height: { type: Number, required: true },
  calories: { type: Number, required: true }
})

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: { type: String, required: true },
  googleId: {
    type: Object,
    required: true
  },

  userInfo: {
    type: userDetailSchema
  }
})

module.exports = mongoose.model('User', userSchema)
