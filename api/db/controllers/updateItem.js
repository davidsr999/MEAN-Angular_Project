const Item = require("../models2/item");



exports.update = async (req, res) => {
    try{
        const {name, descripcion, edad } = req.body;
        let producto = await Item.findById(req.params.id);  

        if(!producto){
            res.status(404).json({msg: 'No existe'});
        }

        producto.name = name;
        producto.descripcion = descripcion;
        producto.edad = edad;

        producto =  await Item.findOneAndUpdate({_id: req.params.id }, producto, {new: true});
        res.json(producto);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
} 