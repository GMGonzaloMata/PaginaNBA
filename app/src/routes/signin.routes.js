const { Router } = require('express')
const router = Router()
const { sendSignin } = require('../controllers/signin.controllers')

router.get('/signin', sendSignin)

module.exports = router
