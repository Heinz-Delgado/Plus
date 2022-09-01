const ip_model = require('../model/ip.model');

async function getConsultarIp(req,res){
    try {
        let servers;
        servers = await ip_model.consultaIp();
        res.status(200).send({status: 200,server: servers,});
    } catch (error) {
        res.status(500).send({status: 500, error: error.message});
        
    }
}
async function postingresarIps(req,res) { 
    const {id_server, allowed} = req.body;
    try {
        
        const servers = await ip_model.postingresarIps(id_server, allowed);
        res.status(200).send({mensaje: 'Ips ingresada correctamente'});
    } catch (error) {
        res.status(500).send({status: 500, error: error.message});
    }
}
async function deleteIps(req, res){
    const {id_allowed_ips} = req.body;
    try {

        const servers =  await ip_model.deleteIps(id_allowed_ips);
        res.status(200).send({mensaje: 'Ips eliminada correctamente'});
        
    } catch (error) {
        console.log(error);
        res.status(500).send({status: 500, error: error.message});

    }
}

async function putactualizarIps(req, res){
    const {id_allowed_ips,id_server, allowed} = req.body;
    try {

        const servers =  await ip_model.putactualizarIps(id_allowed_ips,id_server, allowed);
        res.status(200).send({mensaje: 'Ips actualizada correctamente'});
        
    } catch (error) {
        console.log(error);
        res.status(500).send({status: 500, error: error.message});

    }
}

module.exports = {
    getConsultarIp,
    postingresarIps,
    deleteIps,
    putactualizarIps,
}