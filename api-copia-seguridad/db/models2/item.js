// siempre que creemos una nueva coleccion creamos un esquema
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: String,
    descripcion: String,
    edad: Number
    
})


const Item = mongoose.model('Item', itemSchema);

module.exports = Item;