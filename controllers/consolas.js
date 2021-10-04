const path = require('path')
const Consola = require('../utils/database').models.consola

exports.postAgregarConsola = (req,res)=>{
    console.log(req.body);
    Consola.create(req.body)
        .then(cons=>{
            console.log("Registro Exitoso")
            res.json({estado: "aceptado"})
        })
        .catch(err=>{
            console.log(err)
            res.json({estado:"error"})
        })
    //res.redirect('/videojuegos/confirmacionDatos')
}

exports.getObtenerConsolas = (req,res)=>{
    Consola.findAll()
        .then(consolas =>{
            console.log(consolas)
            res.json(consolas)
        })
        .catch(err=>console.log(err))
} 

exports.postBorrarConsola = (req, res)=>{
    console.log(req.body)
    Consola.destroy({
        where:{
            id:req.body.id
        }
    })
    .then(() =>{
        console.log("Consola eliminada")
        res.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}


exports.postActualizarConsola = (req,res)=>{
    console.log(req.body)
    Consola.update({
        nombre:req.body.nombre
    },{
      where:{
          id: req.body.id
      }  
    })
    .then(() =>{
        console.log("Consola actualizada")
        res.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}
