const mongoose = require('mongoose');

const CategoriaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true

    }
});
const CategoriaModel = mongoose.model('categoria', CategoriaSchema);

module.exports = CategoriaModel;