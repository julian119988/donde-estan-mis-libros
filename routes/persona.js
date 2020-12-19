const express = require('express');
const router = express.Router();

const PersonaModel = require('../models/persona');

router.post('/', async(req, res) => {
    try {
        const { nombre, apellido, alias, email } = await req.body;
        res.status(200).send({
            mensaje: `Nombre: ${nombre},
            Apellido: ${apellido},
            Alias: ${alias},
            Email: ${email}`
        });
    } catch (error) {
        console.log(error);
        res.status(413).send({ mensaje: 'error.message' });
    }
});

router.get('/', async(req, res) => {
    try {
        res.status(200).send('Listado de personas!!');
        //const respuesta = await categoriaModel.find();
    } catch (error) {
        res.status(413).send(error, { mensaje: 'Error inesperado' });
    }
});

router.get('/:id', async(req, res) => {
    try {
        res.status(200).send('Persona con el id seleccionado');
        //const respuesta = await categoriaModel.find();
    } catch (error) {
        res.status(413).send(error, { mensaje: 'Error inesperado, No se encuentra esa persona' });
    }
});

router.put('/:id', async(req, res) => {
    try {
        res.status(200).send('Se modifico la persona selaccionada');
    } catch (error) {
        console.log(error);
        res.status(413).send({ mensaje: 'Error inesperado, No Se encuentra esa persona' });
    }
});

router.delete('/:id', async(req, res) => {
    try {
        res.status(200).send('Se borro la persona seleccionada');
        //const respuesta = await categoriaModel.find();
    } catch (error) {
        res.status(413).send(error, { mensaje: 'Error inesperado, No existe esa persona, Esa persona tiene libros asociados no se puede eliminar' });
    }
});

module.exports = router;