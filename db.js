const mongoose = require('mongoose');

const uri = "mongodb+srv://admin:admin@where-is-my-books.utvpb.mongodb.net/where-is-my-books?retryWrites=true&w=majority";

async function conectar() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log("Conectado a BD metodo: Mongoodb Atlas - async-await");
    } catch (e) {
        console.log(e);
    }
};

conectar();