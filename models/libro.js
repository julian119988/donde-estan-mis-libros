const mongoose = require('mongoose');

const LibroSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: String,
    categoria_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categoria',
        required: true
    },
    persona_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'persona',
        required: true
    }

});
const LibroModel = mongoose.model('libro', LibroSchema);

module.exports = LibroModel;