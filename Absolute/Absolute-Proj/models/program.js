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
    required: true
  },
<<<<<<< HEAD
  opinion: {
    type: Schema.Types.ObjectId,
    ref: 'Opinion'
  }
=======
  opinion: [{ type: Schema.Types.ObjectId, ref: 'Opinion' }]
>>>>>>> f73ebfad40c6f0d9ea22bc41528ad5ff84ac9224
})

module.exports = mongoose.model('Program', programSchema)
