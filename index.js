const express = require("express");
const app = express();

app.get('/', (req, res) => {
    return res.json("NAHHHHHHHHHHHHHH CREOOOOOOOOOOOO");
})

const listener = app.listen(8083, () => { console.log(listener.address().port); })