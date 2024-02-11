const User = require('../models/user')
const Opinion = require('../models/opinion')
const Program = require('../models/program')

const create = async (req, res) => {
  try {
    
    req.body.user = req.user._id
    req.body.userName = req.user.name
    req.body.userAvatar = req.user.avatar
    //create the req.body for Opinion
    let newOpinion = await Opinion.create(req.body)
    //find the program that I want to add the opinion to
    const program = await Program.findById(req.params.id)


    //add the id of the opinon opinion field on the program document
    program.opinion.push(newOpinion)
    //save the changes made to the program
    await program.save()
    //redirect to the show page for the program
    res.redirect(`/programs/${program._id}`)
  } catch (error) {
    res.redirect('/programs')
    console.log(error)
  }
}

const deleteOp = async (req, res) => {
  const program = await Program.findOne({ opinion: req.params.id })

  // The word Opinion to access the comment has no s3
  console.log('this is program', program)
  await program.opinion.remove(req.params.id)
  await program.save()
  res.redirect(`/programs/${program._id}`)
  // await Opinion.deleteOne(req.params.id)
  // res.redirect("/programs")
}

module.exports = {
  create,
  deleteOp
}
