const express = require('express')
const router = express.Router()
const programsCtrl = require('../controllers/programs')

//GET // programs
router.get('/', programsCtrl.index)

//GET / programs/:id (Below new always)
router.get('/:id', programsCtrl.show)

//GET / programs/new
router.get('/new', programsCtrl.newProgram)

//POST /programs
router.post('/', programsCtrl.create)

module.exports = router
