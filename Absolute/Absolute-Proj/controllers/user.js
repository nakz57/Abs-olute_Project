const User = require('../models/user')

// To show show user details
const show = (req, res) => {
  //const program = await Program.findById(req.params.id)
  const id = req.params.id
  res.render('user', { title: 'Show User Details', myId: id })
}

const edit = async (req, res) => {
  const id = req.params.id
  const currentUser = await User.findById(id)
  res.render('user/edit', { id, currentUser })
}

module.exports = {
  show,
  edit
}
