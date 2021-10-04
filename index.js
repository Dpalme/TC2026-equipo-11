const express = require("express");
const path = require('path')
const app = express();
const routesVid = require('./routes/videojuegos.js');
const routesCons = require('./routes/consolas.js');
const routesConsVid = require('./routes/consolaVideojuego.js');

const sequelize = require('./utils/database')
app.use(express.static(path.join(__dirname,'public')))
app.use(routesVid);
app.use(routesCons);
app.use(routesConsVid)

app.get('/', (req, res) => {
    return res.json("NAHHHHHHHHHHHHHH CREOOOOOOOOOOOO");
})

const listener = app.listen(8083, () => { console.log(listener.address().port); })
