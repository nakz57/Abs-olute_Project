const User = require('../models/user')

// To show show user details
const show = (req, res) => {
  //const program = await Program.findById(req.params.id)
  const id = req.params.id
  res.render('user/show', { title: 'Show User Details', myId: id })
  // console.log(req.params.id)
  // res.send('<h2>Test</h2>')
}

const edit = (req, res) => {
  const user = User.getOne(req.params.id)
  res.render('users/show', {user})
}
module.exports = {
  show,
  edit
}
