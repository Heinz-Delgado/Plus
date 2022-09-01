const cliente_servidor_model = require('../model/cliente_servidor.model');

async function getConsultarClienteServidor(req,res){
    try {
        let servers;
        servers = await cliente_servidor_model.consultaClienteServidor();
        res.status(200).send({status: 200,server: servers,});
    } catch (error) {
        res.status(500).send({status: 500, error: error.message});
        
    }
}
async function postingresarClienteServidor(req,res) { 
    const {id_cliente, id_server} = req.body;
    try {
        
        const servers = await cliente_servidor_model.postingresarClienteServidor(id_cliente, id_server);
        res.status(200).send({mensaje: 'Cliente servidor ingresado correctamente'});
    } catch (error) {
        res.status(500).send({status: 500, error: error.message});
    }
}
async function putactualizarClienteServidor(req, res){
    const {id_cliente, id_server} = req.body;
    try {

        const servers =  await cliente_servidor_model.putactualizarClienteServidor(id_cliente, id_server);
        res.status(200).send({mensaje: 'Cliente servidor actualizado correctamente'});
        
    } catch (error) {
        console.log(error);
        res.status(500).send({status: 500, error: error.message});

    }
}
async function deleteClienteServidor(req, res){
    const {id_cliente} = req.body;
    try {

        const servers =  await cliente_servidor_model.deleteClienteServidor(id_cliente);
        res.status(200).send({mensaje: 'Cliente servidor eliminado correctamente'});
        
    } catch (error) {
        console.log(error);
        res.status(500).send({status: 500, error: error.message});

    }
}

module.exports = {
    getConsultarClienteServidor,
    postingresarClienteServidor,
    putactualizarClienteServidor,
    deleteClienteServidor,
}