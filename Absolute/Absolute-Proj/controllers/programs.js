const Program = require('../models/program')
const Opinion = require('../models/opinion')

const index = async (req, res) => {
  const programs = await Program.find({})
  res.render('programs/index', { title: 'All Programs', programs })
}

const newProgram = (req, res) => {
  res.render('programs/new', { title: 'Add Program', errorMsg: 'didnt work' })
}


const show = async (req, res) => {
  const program = await Program.findById(req.params.id).populate('opinion')
  res.render('programs/show', { title: 'Programs Added', program })
}

const create = async (req, res) => {
  try {
    req.body.user = req.user._id
    req.body.userName = req.user.name
    req.body.userAvatar = req.user.avatar
    await Program.create(req.body)
    res.redirect('/programs')
  } catch (error) {
    console.log(error)
    res.redirect('/new', { errorMsg: error.message })
  }
}

const update = async (req, res) => {
  try {
    const id = req.params.id
    await Program.updateOne(
      { _id: id },
      { $set: { title: req.body.title, workout: req.body.workout } }
    )
    res.redirect('/programs')
  } catch (error) {
    console.log(error)
    res.redirect('/new', { errorMsg: error.message })
  }
}

const deletePro = async (req, res) => {
  await Program.findByIdAndDelete(req.params.id)
  res.redirect("/programs")
}

module.exports = {
  index,
  newProgram,
  show,
  create,
  update,
  deletePro
}
