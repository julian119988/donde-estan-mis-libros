const mongoose = require('mongoose');

const LibroSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    descripcion: {
        type: String
    },
    categoria_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categoria',
        required: true
    }],
    persona_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'persona',
        required: false
    }]

});
const LibroModel = mongoose.model('libro', LibroSchema);

module.exports = LibroModel;