const User = require('../models/user')
const Opinion = require('../models/opinion')
const Program = require('../models/program')

const create = async (req, res) => {
  try {
    
    req.body.user = req.user._id
    req.body.userName = req.user.name
    req.body.userAvatar = req.user.avatar
    let newOpinion = await Opinion.create(req.body)
    const program = await Program.findById(req.params.id)


    program.opinion.push(newOpinion)
    await program.save()
    res.redirect(`/programs/${program._id}`)
    
  } catch (error) {
    res.redirect('/programs')
    console.log(error)
  }
}

const deleteOp = async (req, res) => {
  const program = await Program.findOne({ opinion: req.params.id })
  console.log('this is program', program)
  await program.opinion.remove(req.params.id)
  await program.save()
  res.redirect(`/programs/${program._id}`)
}

module.exports = {
  create,
  deleteOp
}
