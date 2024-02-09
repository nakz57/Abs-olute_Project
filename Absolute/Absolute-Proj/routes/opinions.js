const express = require('express')
const router = express.Router()
const opinionsCtrl = require('../controllers/opinions')

// POST /programs/:id/opinions (creating an opinion for a specific program id)

router.post('/programs/:id/opinion', opinionsCtrl.create)


module.exports = router
