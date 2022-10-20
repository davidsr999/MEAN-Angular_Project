const Item = require("../models2/item");



exports.elimina = async (req, res) => {
    try{
        const {name, descripcion, edad } = req.body;
        let producto = await Item.findById(req.params.id);  

        if(!producto){
            res.status(404).json({msg: 'No existe'});
        }
        await Item.findOneAndRemove({_id: req.params.id});
        res.json({msg: 'Producto eliminado con exito'});


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
} 