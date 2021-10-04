const express = require("express")
const vjController = require('../controllers/videojuegos')
const router = express.Router()

router.post('/agregarVideojuego',vjController.postAgregarVideojuego)
router.get('/obtenerVideojuegos',vjController.getObtenerVideojuegos)
router.post('/borrarVideojuego', vjController.postBorrarVideojuego)
router.post('/actualizarVideojuego', vjController.postActualizarVideojuego)


module.exports = router