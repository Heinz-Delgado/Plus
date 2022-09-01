const server_model = require('../model/server.model');

async function getConsultarServer(req,res){
    try {
        let servers;
        servers = await server_model.consultaServer();
        res.status(200).send({status: 200,server: servers,});
    } catch (error) {
        res.status(500).send({status: 500, error: error.message});
        
    }
}

async function postingresarServer(req,res) { 
    const {id_sucursal, id_nodo, tipo_server, clave_publica, ip_publica, port_wireguard, subred, ip_privada, dns} = req.body;
    try {
        
        const servers = await server_model.postingresarServer(id_sucursal, id_nodo, tipo_server, clave_publica, ip_publica, port_wireguard, subred, ip_privada, dns);
        res.status(200).send({mensaje: 'Server ingresado correctamente'});
    } catch (error) {
        res.status(500).send({status: 500, error: error.message});
    }
}

async function deleteServer(req, res){
    const {id_server} = req.body;
    try {

        const servers =  await server_model.deleteServer(id_server);
        res.status(200).send({mensaje: 'Server eliminado correctamente'});
        
    } catch (error) {
        console.log(error);
        res.status(500).send({status: 500, error: error.message});

    }
}

async function putActualizarServer(req, res){
    const {id_server,id_sucursal, id_nodo, tipo_server, clave_publica, ip_publica, port_wireguard, subred, ip_privada, dns} = req.body;
    try {

        const servers =  await server_model.putactualizarServer(id_server,id_sucursal, id_nodo, tipo_server, clave_publica, ip_publica, port_wireguard, subred, ip_privada, dns);
        res.status(200).send({mensaje: 'Server actualizado correctamente'});
        
    } catch (error) {
        console.log(error);
        res.status(500).send({status: 500, error: error.message});

    }
}





module.exports = {
    getConsultarServer,
    postingresarServer,
    putActualizarServer,
    deleteServer,
}