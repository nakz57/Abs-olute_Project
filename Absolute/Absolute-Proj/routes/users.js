var express = require('express')
var router = express.Router()
const userCtrl = require('../controllers/user')

/* GET users listing. */
router.get('/', function (req, res, next) {
  // res.send('respond with a resource');
  res.render('user/index')
})

/* GET user details */
router.get('/:id', userCtrl.show)

module.exports = router
