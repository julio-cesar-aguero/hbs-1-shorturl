const express = require('express')
const router = express.Router()
const {loginForm, loginUser, registerForm, registerUser, confirmarCuenta} = require('../controllers/authController')


router.get("/register",registerForm)
router.post("/register", registerUser)
router.get("/confirmarCuenta/:token", confirmarCuenta)
router.get("/login",loginForm)
router.post("/login",loginUser)
module.exports = router;