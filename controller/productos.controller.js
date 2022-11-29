const productos_model = require('../model/productos.model');

async function getConsultarProducto(req,res){
    try {
        let servers;
        servers = await productos_model.consultaProducto();
        res.status(200).send({status: 200,server: servers,});
    } catch (error) {
        console.log(error);
        res.status(500).send({status: 500, error: error.message});
        
    }
}
async function postingresarProducto(req,res) { 
    try {
        let {prod_codigo, cat_codigo, prod_nombre, prod_descripcion, prod_iva, prod_costo, prod_pvp, prod_estado, prod_totalstock} = req.body;
        let servers = await productos_model.postingresarProducto(prod_codigo, cat_codigo, prod_nombre, prod_descripcion, prod_iva, prod_costo, prod_pvp, prod_estado, prod_totalstock);
        res.status(200).send({status: 200,server: servers,});
    } catch (error) {
        res.status(500).send({status: 500, error: error.message});
        console.log(error)
    }
}
async function deleteProducto(req, res){
    try {
        let servers = req.body.servers;
        console.log(servers)
        servers =  await productos_model.deleteProducto(servers);
        res.status(200).send({status: 200,server: servers,});
    } catch (error) {
        res.status(500).send({status: 500, error: error.message});
        
    }
}
async function putActualizarProducto(req, res) {
    try {
        let {prod_codigo, cat_codigo, prod_nombre, prod_descripcion, prod_iva, prod_costo, prod_pvp, prod_estado, prod_totalstock} = req.body;
        let servers = await productos_model.ActualizarProducto(prod_codigo, cat_codigo, prod_nombre, prod_descripcion, prod_iva, prod_costo, prod_pvp, prod_estado, prod_totalstock);
        res.status(200).send({status: 200,sucursal: servers,});
    } catch (error) {
        res.status(500).send({status: 500, error: error.message});
        
    }
}

module.exports = {
    getConsultarProducto,
    postingresarProducto,
    deleteProducto,
    putActualizarProducto,

    
}