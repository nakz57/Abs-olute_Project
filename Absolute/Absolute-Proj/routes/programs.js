const express = require('express')
const router = express.Router()
const programsCtrl = require('../controllers/programs')

//GET // programs
router.get('/', programsCtrl.index)

module.exports = router
