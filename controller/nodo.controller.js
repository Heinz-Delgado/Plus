const nodo_model = require('../model/nodo.model');

async function getConsultar(req,res){
    try {
        let nodos;
        nodos = await nodo_model.consultar();
        res.status(200).send({status: 200,nodo: nodos,});
    } catch (error) {
        res.status(500).send({status: 500, error: error.message});
        
    }
}
async function postingresarNodo(req,res) { 
    try {
        let nodos = req.body.nodos;
        nodos = await nodo_model.postingresarNodo(nodos);
        res.status(200).send({status: 200,nodo: nodos,});
    } catch (error) {
        res.status(500).send({status: 500, error: error.message});
    }
}

async function deleteNodo(req, res){
    try {
        let nodos = req.body.nodos;
        nodos =  await nodo_model.deleteNodo(nodos);
        res.status(200).send({status: 200,nodo: nodos,});
    } catch (error) {
        res.status(500).send({status: 500, error: error.message});
    }
}

async function putActualizarNodo(req, res) {
    try {
        let actualizar = req.body.actualizar;
        actualizar = await nodo_model.putActualizarNodo(actualizar);
        res.status(200).send({status: 200,nodo: actualizar});
    } catch (error) {
        res.status(500).send({status: 500, error: error.message});
        
    }
}

module.exports = {
    getConsultar,
    postingresarNodo,
    deleteNodo,
    putActualizarNodo,
}