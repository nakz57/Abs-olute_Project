const express = require('express')
const router = express.Router()
const programsCtrl = require('../controllers/programs')

//GET // programs
router.get('/', programsCtrl.index)

//GET / programs/new
router.get('/new', programsCtrl.newProgram)

//GET / programs/:id (Below new always)
router.get('/:id', programsCtrl.show)

//PUT / programs/:id ()
router.put('/:id', programsCtrl.update)

//POST /programs
router.post('/', programsCtrl.create)

module.exports = router
