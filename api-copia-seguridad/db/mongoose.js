// This file will manage the connection to mongodb database
const mongoose = require('mongoose');
const user = 'david';
const password = 'david1999';
const dbname = "stock";
const mongoUrl = `mongodb+srv://${user}:${password}@cluster0.kl8v4gv.mongodb.net/${dbname}`;


mongoose.Promise = global.Promise;
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('Connected to MongoDB: %s \n ', mongoUrl) }) 
    .catch((err) => { console.log(err); });




module.exports = mongoose;