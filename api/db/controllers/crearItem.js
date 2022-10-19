const Item = require("../models2/item");



exports.crear = async (req, res) => {
    try{
        let item;
        item  = new Item(req.body);
        await item.save();
        res.send(item);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
} 