const express = require("express");
const path = require('path')
const app = express();
const routes = require('./routes/videojuegos.js');

const sequelize = require('./utils/database')
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')))
app.use(routes);

app.get('/', (req, res) => {
    return res.json("NAHHHHHHHHHHHHHH CREOOOOOOOOOOOO");
})

const listener = app.listen(8083, () => { console.log(listener.address().port); })
