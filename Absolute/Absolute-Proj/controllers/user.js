const User = require('../models/user')

// To show show user details
const show = (req, res) => {
  res.render('user')
}

const edit = async (req, res) => {
  const id = req.params.id
  res.render('user/edit', { id })
}

const updateUser = async (req, res) => {
  try {
    let userNameId = req.params.id
    await User.updateOne({ _id: userNameId }, req.body)
    console.log(User)
    res.redirect(`/user/${userNameId}/edit`)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  show,
  edit,
  updateUser
}
