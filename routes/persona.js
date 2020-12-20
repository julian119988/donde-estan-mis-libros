const express = require('express');
const router = express.Router();

const PersonaModel = require('../models/persona');

router.post('/', async(req, res, next) => {
    const persona = new PersonaModel({
        nombre: req.body.nombre.toUpperCase(),
        apellido: req.body.apellido.toUpperCase(),
        alias: req.body.alias.toUpperCase(),
        email: req.body.email.toLowerCase()
    });
    try {
        const personaGuardada = await persona.save();
        res.status(201).json(personaGuardada);
    } catch (error) {
        res.status(413);
        res.send('"Faltan datos", "El email ya se encuentra registrado", "error inesperado"');
        next(error);
    }
});

router.get('/', async(req, res) => {
    try {
        const persona = await PersonaModel.find();
        res.status(200).json(persona);
    } catch (error) {
        res.status(413);
        res.send(error, { mensaje: 'Error inesperado' });
        next()
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