const cliente_model = require('../model/cliente.model');
const toke_model = require('../helpers/token.helpers');

async function getConsultarCliente(req,res){
    try {
        let servers;
        servers = await cliente_model.consultaClientes();
        res.status(200).send({status: 200,server: servers,});
    } catch (error) {
        res.status(500).send({status: 500, error: error.message});
        
    }
}
async function postingresasCliente(req,res) { 
    const {nombres_cliente, clave_publica_cliente,usuario,contraseña} = req.body;
    try {
        
        const servers = await cliente_model.postingresasCliente(nombres_cliente, clave_publica_cliente,usuario,contraseña);
        res.status(200).send({mensaje: 'Cliente ingresado correctamente'});
    } catch (error) {
        res.status(500).send({status: 500, error: error.message});
    }
}
async function deleteCliente(req, res){
    const {id_cliente} = req.body;
    try {

        const servers =  await cliente_model.deleteCliente(id_cliente);
        res.status(200).send({mensaje: 'Cliente eliminado correctamente'});
        
    } catch (error) {
        console.log(error);
        res.status(500).send({status: 500, error: error.message});

    }
}
async function putactualizarCliente(req, res){
    const {id_cliente, nombres_cliente, clave_publica_cliente,usuario,contraseña} = req.body;
    try {

        const servers =  await cliente_model.putactualizarCliente(id_cliente, nombres_cliente, clave_publica_cliente,usuario,contraseña);
        res.status(200).send({mensaje: 'Cliente actualizado correctamente'});
        
    } catch (error) {
        console.log(error);
        res.status(500).send({status: 500, error: error.message});

    }
}

async function postUsuarioContraseña(req,res) { 
    const {usuario,contrasena} = req.body;
    try {
        const servers = await cliente_model.postUsuarioContraseña(usuario);
        if (servers != undefined ){
            if (contrasena == servers.contrasena) {
                const key = toke_model.generarToken(usuario,contrasena)
                res.status(200).send({mensaje: ' Ingreso correctamente', token: key});
            } else {
                res.status(403).send({mensaje: 'Usuario o contraseña incorrectos'});
            }
        } else {
            res.status(403).send({mensaje: 'Usuario o contraseña no registrdos'});
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).send({status: 500, error: error.message});
    }
}




module.exports = {
    getConsultarCliente,
    postingresasCliente,
    deleteCliente,
    putactualizarCliente,
    postUsuarioContraseña,
}