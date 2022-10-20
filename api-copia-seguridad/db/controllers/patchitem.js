const { ObjectUnsubscribedError } = require("rxjs");
const Item = require("../models2/item");



exports.patch = async (req, res) => {
    try{
        const updates = req.body;
        await Item.updateOne({_id: req.params.id}, {$set: updates})
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({error: 'could not find'})
        })


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
} 