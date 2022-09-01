const sucursal_model = require('../model/sucursal.model');

async function getConsulta(req,res){
    try {
        let sucursales;
        sucursales = await sucursal_model.consulta();
        res.status(200).send({status: 200,sucursal: sucursales,});
    } catch (error) {
        res.status(500).send({status: 500, error: error.message});
        
    }
}
async function postingresarSucursal(req,res) { 
    try {
        let sucursales = req.body.sucursales;
        sucursales = await sucursal_model.postingresarSucursal(sucursales);
        res.status(200).send({status: 200,sucursal: sucursales,});
    } catch (error) {
        res.status(500).send({status: 500, error: error.message});
    }
}

async function deleteSucursal(req, res){
    try {
        let sucursales = req.body.sucursales;
        sucursales =  await sucursal_model.deleteSucursal(sucursales);
        res.status(200).send({status: 200,sucursal: sucursales,});
    } catch (error) {
        res.status(500).send({status: 500, error: error.message});
    }
}

async function putActualizarSucursal(req, res) {
    try {
        let actualizar = req.body.sucursales;
        actualizar = await sucursal_model.putActualizarSucursal(actualizar);
        res.status(200).send({status: 200,sucursal: actualizar,});
    } catch (error) {
        res.status(500).send({status: 500, error: error.message});
        
    }
}
module.exports = {
    getConsulta,
    postingresarSucursal,
    deleteSucursal,
    putActualizarSucursal,
}