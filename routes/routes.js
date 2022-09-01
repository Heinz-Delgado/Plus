const {Router} = require('express');

const sucursal_controller = require('../controller/sucursal.controller');
const nodo_controller = require('../controller/nodo.controller');
const server_controller = require('../controller/server.controller');
const cliente_controller = require('../controller/cliente.controller');
const ip_controller= require('../controller/ip.controller');
const cliente_servidor_model = require('../controller/cliente_servidor.controller');
const middleware = require('../midelware/token.midelware');

const route = Router();
// Sucursales
route.get('/sucursales', sucursal_controller.getConsulta );
route.post('/sucursales', sucursal_controller.postingresarSucursal);
route.delete('/sucursales', sucursal_controller.deleteSucursal);
route.put('/sucursales', sucursal_controller.putActualizarSucursal);

// Nodos

route.get('/nodos', nodo_controller.getConsultar);


route.post('/nodos', nodo_controller.postingresarNodo);
route.delete('/nodos', nodo_controller.deleteNodo);
route.put('/nodos', nodo_controller.putActualizarNodo);

//Server

route.get('/server', server_controller.getConsultarServer);
route.post('/server', server_controller.postingresarServer);
route.delete('/server', server_controller.deleteServer);
route.put('/server', server_controller.putActualizarServer);

//Cliente

route.get('/cliente', middleware.protegerRuta, cliente_controller.getConsultarCliente);
route.post('/cliente', cliente_controller.postingresasCliente);
route.delete('/cliente', cliente_controller.deleteCliente);
route.put('/cliente', cliente_controller.putactualizarCliente);


//Ip
route.get('/ip', ip_controller.getConsultarIp);
route.post('/ip', ip_controller.postingresarIps);
route.delete('/ip', ip_controller.deleteIps);
route.put('/ip', ip_controller.putactualizarIps);

//Cliente-Servidor
route.get('/cliente_servidor', cliente_servidor_model.getConsultarClienteServidor);
route.post('/cliente_servidor', cliente_servidor_model.postingresarClienteServidor,);
route.put('/cliente_servidor', cliente_servidor_model.putactualizarClienteServidor);
route.delete('/cliente_servidor', cliente_servidor_model.deleteClienteServidor);

//Usuario y Contraseña
route.post('/login', cliente_controller.postUsuarioContraseña);

//Token



module.exports = route;