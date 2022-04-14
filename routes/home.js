const express = require('express')
const { leerUrls, agregarUrl,eliminarUrl, editarUrlForm, editarUrl, redirect } = require('../controllers/homeController')
const urlValidar = require('../middleware/urlValida')
const router = express.Router()

router.get("/", leerUrls)
router.post("/", urlValidar,agregarUrl)
router.get("/eliminar/:id",eliminarUrl)
router.get("/editar/:id",editarUrlForm)
router.post("/editar/:id",urlValidar,editarUrl)
router.get('/red/:shortURL',redirect)

module.exports = router