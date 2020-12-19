const mongoose = require('mongoose');

const PersonaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    alias: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});
const PersonaModel = mongoose.model('persona', PersonaSchema);

module.exports = PersonaModel;