const mongoose = require('mongoose')

const Schema = mongoose.Schema

const programSchema = new Schema({
  title: { type: String, 
    default: "N/A",
    required: true
    },
  duration: {
    type: Number,
    default: 60,
    max: 120,
    min: 5
  },
  workout: {
    type: String,
    default:"N/A",
    required: true
  },
  opinion: [{ type: Schema.Types.ObjectId, ref: 'Opinion' }],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: String,
  userAvatar: String
})

module.exports = mongoose.model('Program', programSchema)
