const express = require('express');
const cors = require('cors');
const app = express();

// connnect to mongodb, in this case, via mongodb compass
const {mongoose} = require('./db/mongoose');
app.use(cors());

app.use(express.json()); //para poder leer archivos json 
app.use('/api', require('./db/router/crudcontrol'))

app.get('/', (req, res) => {
    res.send('Check connection');
});

app.use(require('./db/router/crudcontrol'));


app.listen(3000);
console.log('Server on port', 3000);