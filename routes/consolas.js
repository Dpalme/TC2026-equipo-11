const express = require("express")
const consController = require('../controllers/consolas.js')
const router = express.Router()

router.post('/agregarConsola',consController.postAgregarConsola)
router.get('/obtenerConsolas',consController.getObtenerConsolas)
router.post('/borrarConsola', consController.postBorrarConsola)
router.post('/actualizarConsola', consController.postActualizarConsola)


module.exports = router