const categoria_model = require('../model/categoria.model');

async function getConsultarCategoria(req,res){
    try {
        let servers;
        servers = await categoria_model.consultaCategoria();
        res.status(200).send({status: 200,server: servers,});
    } catch (error) {
        console.log(error);
        res.status(500).send({status: 500, error: error.message});
        
    }
}
async function postingresarCategoria(req,res) { 
    try {
        let {cat_codigo, cat_nombre, descriocion_} = req.body;
        let servers = await categoria_model.postingresarCategoria(cat_codigo, cat_nombre, descriocion_);
        res.status(200).send({status: 200,server: servers,});
    } catch (error) {
        res.status(500).send({status: 500, error: error.message});
        console.log(error)
    }
}
async function deleteCategoria(req, res){
    try {
        let servers = req.body.servers;
        console.log(servers)
        servers =  await categoria_model.deleteCategoria(servers);
        res.status(200).send({status: 200,server: servers,});
    } catch (error) {
        res.status(500).send({status: 500, error: error.message});
        
    }
}
async function putActualizarCategoria(req, res) {
    try {
        let {cat_codigo, cat_nombre, descriocion_} = req.body;
        let servers = await categoria_model.ActualizarCategoria(cat_codigo, cat_nombre, descriocion_);
        res.status(200).send({status: 200,sucursal: servers,});
    } catch (error) {
        res.status(500).send({status: 500, error: error.message});
        
    }
}
module.exports = {
    getConsultarCategoria,
    postingresarCategoria,
    deleteCategoria,
    putActualizarCategoria

    
}
