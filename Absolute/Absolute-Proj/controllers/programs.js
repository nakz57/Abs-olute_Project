const Program = require('../models/program')

const index = async (req, res) => {
  const programs = await Program.find({})
  res.render('programs/index', { title: 'All Programs', programs })
}

const newProgram = (req, res) => {
  res.render('programs/new', { title: 'Add Program', errorMsg: 'didnt work' })
}

// Uncomment later
/* 
const show = async (req, res) => {
  const program = await Program.findById(req.params.id)
  res.render('programs/show', { title: 'Programs Added', program })
}
 */

// To be deleted later
const show = async (req, res) => {
  //const program = await Program.findById(req.params.id)
  res.render('programs/show', { title: 'Programs Added' })
}

const create = async (req, res) => {
  try {
    await Program.create(req.body)
    console.log('i am here')
    res.redirect('/programs')
  } catch (error) {
    console.log(error)
    res.redirect('/new', { errorMsg: error.message })
  }
}

module.exports = {
  index,
  newProgram,
  show,
  create
}
