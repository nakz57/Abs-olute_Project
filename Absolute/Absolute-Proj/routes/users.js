var express = require('express')
var router = express.Router()
const userCtrl = require('../controllers/user')

/* GET users listing. */
router.get('/', function (req, res, next) {
  // res.send('respond with a resource');
  res.render('user/index')
})

// GET /users/:id
router.get('/:id', userCtrl.show)

// GET /users/:id/edit

router.get('/:id/edit', userCtrl.edit)


//PUT /users/:id

router.put('/:id', userCtrl.updateUser)


module.exports = router
