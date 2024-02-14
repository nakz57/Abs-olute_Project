const mongoose = require('mongoose')

const Schema = mongoose.Schema

// const userDetailSchema = new Schema({
//   weight: { type: Number, default: 80, required: true },
//   age: { type: Number, default: 30, required: true },
//   height: { type: Number, default: 180, required: true },
//   calories: { type: Number, default: 2000, required: true }
// })

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
