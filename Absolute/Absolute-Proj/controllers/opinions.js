const Opinion = require('../models/opinion')
const Program = require('../models/program')

const create = async (req, res) => {
  try {
    //create the req.body for Opinion
    let newOpinion = await Opinion.create(req.body)
    console.log('this is the req.body', req.body)
    console.log('this is the req.body ID', req.body.comment)
    //find the program that I want to add the opinion to
    const program = await Program.findById(req.params.id)
    console.log(program)
    //add the id of the opinon opinion field on the program document
    program.opinion.push(newOpinion)
    console.log('opinion created', program)
    //save the changes made to the program
    await program.save()
    //redirect to the show page for the program
    res.redirect(`/programs/${program._id}`)
  } catch (error) {
    console.log(error)
    console.log('opinion not being created')
    res.redirect('/programs')
  }
}

module.exports = {
  create
}
