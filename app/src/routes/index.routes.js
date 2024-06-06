const { Router } = require('express')
const router = Router()
const { sendIndex, createAccount } = require('../controllers/index.controllers')

router.get('/', sendIndex)

router.post('/', createAccount)
module.exports = router
