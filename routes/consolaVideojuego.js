const express = require("express")
const consVidController = require('../controllers/consolaVideojuego.js')
const router = express.Router()

router.post('/agregarConsolaVideojuego',consVidController.postAgregarConsolaVideojuego)
router.get('/obtenerConsolasVideojuegos',consVidController.getObtenerConsolasVideojuegos)
router.post('/borrarConsolaVideojuego', consVidController.postBorrarConsolaVideojuego)
router.post('/actualizarConsolaVideojuego', consVidController.postActualizarConsolaVideojuego)


module.exports = router