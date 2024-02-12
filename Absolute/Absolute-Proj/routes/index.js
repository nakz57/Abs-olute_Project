var express = require('express')
var router = express.Router()
const passport = require('passport')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Abs-Olute' })
})

// Google Oauth login route
router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
)

// Google OAuth callback route
router.get(
  '/oauth2callback',
  passport.authenticate('google', {
    successRedirect: '/user',
    failureRedirect: '/programs'
  })
)

// logout route

router.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('/programs')
  })
})

module.exports = router
