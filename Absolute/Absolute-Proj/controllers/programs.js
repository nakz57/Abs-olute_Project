const Program = require('../models/program')

const index = async (req, res) => {
  const programs = await Program.find({})
  res.render('programs/index', { title: 'All Programs', programs })
}

module.exports = {
  index
}
