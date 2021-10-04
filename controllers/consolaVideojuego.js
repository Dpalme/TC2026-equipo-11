const path = require('path')
const ConsolaVideojuego = require('../utils/database').models.consolaVideojuego

exports.postAgregarConsolaVideojuego = (req,res)=>{
    console.log(req.body);
    ConsolaVideojuego.create(req.body)
        .then(consVid=>{
            console.log("Registro Exitoso")
            res.json({estado: "aceptado"})
        })
        .catch(err=>{
            console.log(err)
            res.json({estado:"error"})
        })
    //res.redirect('/videojuegos/confirmacionDatos')
}

exports.getObtenerConsolasVideojuegos = (req,res)=>{
    ConsolaVideojuego.findAll()
        .then(consolasVideojuegos =>{
            console.log(consolasVideojuegos)
            res.json(consolasVideojuegos)
        })
        .catch(err=>console.log(err))
} 

exports.postBorrarConsolaVideojuego = (req, res)=>{
    console.log(req.body)
    ConsolaVideojuego.destroy({
        where:{
            idCV:req.body.id
        }
    })
    .then(() =>{
        console.log("ConsolaVideojuego eliminada")
        res.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}


exports.postActualizarConsolaVideojuego = (req,res)=>{
    console.log(req.body)
    ConsolaVideojuego.update({
        lanzamiento:req.body.lanzamiento,
        videojuegoId: req.body.videojuegoId,
        consolaId: req.body.consolaId
    },{
      where:{
          idCV: req.body.id
      }  
    })
    .then(() =>{
        console.log("ConsolaVideojuego actualizada")
        res.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}
