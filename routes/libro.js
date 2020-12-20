const express = require('express');
const router = express.Router();

const LibroModel = require('../models/libro');

router.post('/', async(req, res, next) => {
    const libro = new LibroModel({
        nombre: req.body.nombre.toUpperCase(),
        descripcion: req.body.descripcion.toUpperCase(),
        categoria_id: req.body.categoria_id,
        persona_id: req.body.persona_id
    });
    try {
        const libroGuardado = await libro.save();
        res.status(201).json(libroGuardado);

    } catch (error) {
        res.status(413);
        res.send('"ese libro ya existe", "nombre y categoria son datos obligatorios", "no existe la categoria indicada", "no existe la persona indicada"');
        next(error);
    }
});

router.get('/', async(req, res, next) => {
    try {
        const libro = await LibroModel.find()
            //const libro = await LibroModel.find().populate('persona_id');
            //populate muestra todos los datos de la persona que tiene el libro
        res.status(200).json(libro);
    } catch (error) {
        res.status(413);
        res.send("mensaje: 'Error inesperado'");
        next(error)
    }
});
router.get('/:id', async(req, res, next) => {
    const { id } = req.params;
    try {
        //const libro = await LibroModel.findById(id);
        const libro = await LibroModel.findById(id).populate('persona_id');
        //populate muestra todos los datos de la persona que tiene el libro
        res.status(200).json(libro);
    } catch (error) {
        res.status(413);
        res.send("mensaje: 'Error inesperado, No se encuentra ese libro'");
        next(error)
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