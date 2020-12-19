const express = require('express');
const bodyParser = require('body-parser');
//const mongoose = require('mongoose');

const categoriaRouter = require('./routes/categoria');
const personaRouter = require('./routes/persona');
const libroRouter = require('./routes/libro');

const db = require('./db');

const app = express();

const PORT = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded());

//RUTAS
app.use('/categoria', categoriaRouter);
app.use('/persona', personaRouter);
app.use('/libro', libroRouter);


//CONEXION A PUERTO
app.listen(PORT, () => {
    console.log(`Escuchando en puerto ${PORT}`);
})