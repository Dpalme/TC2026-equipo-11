//Objeto de conexión
const Sequelize = require("sequelize")
const {aplicarRelaciones} = require('./relations')
//Nombre de la base, usuario, contraseña
const sequelize = new Sequelize('u3db','user3','root',{
    dialect: 'mysql', //3306 port
    host: '54.198.161.35',
    define:{
        //Evitar que nos ponga createdAt y updateAt
        timestamps: false,
        //Evitar plural
        freezeTableName : true
    }    
})

//Carga de las definiciones de los modelos
const modelDefiners =[
    //Modelos definidos dentro de la carpeta models
    require('../models/videojuegos'),
    require('../models/consolas'),
    require('../models/consolaVideojuego')
]

//Adherir los modelos al objeto de conexion
for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize)
}

//Realizar las relaciones entre las tabla de la BD
aplicarRelaciones(sequelize)


module.exports = sequelize