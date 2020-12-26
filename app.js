require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const middlewares = require('./middlewares');

//const router = require('./api');
const categoriaRouter = require('./api/categoria');
const personaRouter = require('./api/persona');
const libroRouter = require('./api/libro');

const db = require('./db');

const app = express();

const PORT = process.env.PORT || 3000


app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded());

//RUTAS
//app.use('/api', router);
app.use('/categoria', categoriaRouter);
app.use('/persona', personaRouter);
app.use('/libro', libroRouter);

app.use(middlewares.noEncontrado);
app.use(middlewares.manejadorDeErrores);


//CONEXION A PUERTO
app.listen(PORT, () => {
    console.log(`Escuchando en puerto ${PORT}`);
})