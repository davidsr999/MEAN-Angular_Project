const Item = require("../models2/item");



exports.get = async (req, res) => {
    try{
        const items = await Item.find();
        res.json(items); // importante para que postman no de errores (o lo que sea que utilice el get)

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
} 