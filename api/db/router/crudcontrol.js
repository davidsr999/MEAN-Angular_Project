const express = require('express');
const router = express.Router();
const Item = require('../models2/item'); // importamos el modelo stock
const {List, Task} = require('../models1/index')
const crearController = require('../controllers/crearItem');
const getController = require('../controllers/getItems');
const putController = require('../controllers/updateItem');
const removeItem = require('../controllers/removeItem');
const obtenerItem = require('../controllers/obtenerItem');
const patchItems = require('../controllers/patchitem');


router.get('/lists', async (req, res) => {
    try {
        const lists = await List.find();
        res.json(lists);
    } catch (error) {
        console.log(error);
        res.status(404).send('Hubo un error en el get')
    }
});


router.post('/lists', async (req, res) => {
    try{
        let newlist  = new List(req.body);
        await newlist.save();
        res.send(newlist);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
});


router.patch('/lists/:id', async (req, res) => {
    try{
        const updates = req.body;
        await List.findOneAndUpdate({_id: req.params.id}, {$set: updates})
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
});


router.delete('/lists/:id', async (req, res) => {
    await List.findOneAndDelete({_id: req.params.id}).then(res.send("removedListDoc"));
});


router.get('/lists/:listId/tasks', async (req, res) => {
    // return all tasks corresponding to a specific list
    await Task.find({
        _listId: req.params.listId
    }).then((tasks) => {res.send(tasks)});
})


router.post('/lists/:listId/tasks', async (req, res) => {
    //create a new task within a particular list
    try{
        let newtask = new Task({
            title: req.body.title,
            _listId: req.params.listId
        });
        await newtask.save().then((doc) => {res.send(doc)});
    } catch (error) {
        res.status(404).send(error);
    }
});



/* tasks controll*/

router.patch('/lists/:listId/tasks/:taskId', async (req,res) => {
    await Task.findOneAndUpdate({ 
        _id: req.params.taskId,
        _listId: req.params.listId
    }, {
        $set: req.body
    }).then(() => res.status(200).send('actualizado con exito'));
});


router.delete('/lists/:listId/tasks/:taskId', async (req,res) =>{
    await Task.findOneAndDelete({
        _id: req.params.taskId,
        _listId: req.params.listId
    }).then(() => res.send('Eliminado con exito'))
})



module.exports =    router;