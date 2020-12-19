const express = require('express');
const router = express.Router();

const LibroModel = require('../models/libro');

router.post('/', async(req, res) => {
    const libro = new LibroModel(req.body)
    try {
        const libroGuardado = await libro.save();
        res.status(201).json(libroGuardado);

    } catch (error) {
        res.status(413);
        res.send('"ese libro ya existe", "nombre y categoria son datos obligatorios", "no existe la categoria indicada", "no existe la persona indicada"');
        next(error);
    }
});

router.get('/', async(req, res) => {
    try {
        res.status(200).send('Listado Libros!!');
        //const respuesta = await categoriaModel.find();
    } catch (error) {
        res.status(413).send(error, { mensaje: 'Error inesperado' });
    }
});

router.get('/:id', async(req, res) => {
    try {
        res.status(200).send('Libro con el id seleccionado');
        //const respuesta = await categoriaModel.find();
    } catch (error) {
        res.status(413).send(error, { mensaje: 'Error inesperado, No se encuentra esa persona' });
    }
});

router.put('/:id', async(req, res) => {
    try {
        res.status(200).send('Se modifico el libro selaccionado');
    } catch (error) {
        console.log(error);
        res.status(413).send({ mensaje: 'Error inesperado, No Se encuentra esa persona' });
    }
});

router.put('/devolver/:id', async(req, res) => {
    try {
        res.status(200).send('Se Devolvio!!');
    } catch (error) {
        console.log(error);
        res.status(413).send({ mensaje: 'Error inesperado, No Se encuentra esa persona' });
    }
});

router.put('/prestar/:id', async(req, res) => {
    try {
        res.status(200).send('Se Presto!!');
    } catch (error) {
        console.log(error);
        res.status(413).send({ mensaje: 'Error inesperado, No Se encuentra esa persona' });
    }
});

router.delete('/:id', async(req, res) => {
    try {
        res.status(200).send('Se borro el libro seleccionado');
        //const respuesta = await categoriaModel.find();
    } catch (error) {
        res.status(413).send(error, { mensaje: 'Error inesperado, No existe esa persona, Esa persona tiene libros asociados no se puede eliminar' });
    }
});

module.exports = router;