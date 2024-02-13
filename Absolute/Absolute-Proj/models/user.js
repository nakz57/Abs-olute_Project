const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: { type: String, required: true },
  googleId: {
    type: String,
    required: true
  },
  weight: { type: Number, default: 0, required: true },
  age: { type: Number, default: 0, required: true },
  height: { type: Number, default: 0, required: true },
  calories: { type: Number, default: 0, required: true }
})

module.exports = mongoose.model('User', userSchema)
