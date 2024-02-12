const express = require('express')
const router = express.Router()
const programsCtrl = require('../controllers/programs')

//GET // programs
router.get('/', programsCtrl.index)

//GET / programs/new
router.get('/new', programsCtrl.newProgram)

//GET / programs/:id (Below new always)
router.get('/:id', programsCtrl.show)

//POST /programs
router.post('/', programsCtrl.create)

router.delete('/:id',programsCtrl.deletePro)
module.exports = router
