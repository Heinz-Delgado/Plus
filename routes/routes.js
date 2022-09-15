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
route.get('/sucursales',middleware.protegerRuta, sucursal_controller.getConsulta );
route.post('/sucursales',middleware.protegerRuta, sucursal_controller.postingresarSucursal);
route.delete('/sucursales',middleware.protegerRuta, sucursal_controller.deleteSucursal);
route.put('/sucursales',middleware.protegerRuta, sucursal_controller.putActualizarSucursal);

// Nodos

route.get('/nodos',middleware.protegerRuta, nodo_controller.getConsultar);


route.post('/nodos',middleware.protegerRuta, nodo_controller.postingresarNodo);
route.delete('/nodos',middleware.protegerRuta, nodo_controller.deleteNodo);
route.put('/nodos',middleware.protegerRuta, nodo_controller.putActualizarNodo);

//Server

route.get('/server',middleware.protegerRuta, server_controller.getConsultarServer);
route.post('/server',middleware.protegerRuta, server_controller.postingresarServer);
route.delete('/server',middleware.protegerRuta, server_controller.deleteServer);
route.put('/server',middleware.protegerRuta, server_controller.putActualizarServer);

//Cliente

route.get('/cliente', middleware.protegerRuta, cliente_controller.getConsultarCliente);
route.post('/cliente',middleware.protegerRuta, cliente_controller.postingresasCliente);
route.delete('/cliente',middleware.protegerRuta, cliente_controller.deleteCliente);
route.put('/cliente',middleware.protegerRuta, cliente_controller.putactualizarCliente);


//Ip
route.get('/ip',middleware.protegerRuta, ip_controller.getConsultarIp);
route.post('/ip',middleware.protegerRuta, ip_controller.postingresarIps);
route.delete('/ip',middleware.protegerRuta, ip_controller.deleteIps);
route.put('/ip',middleware.protegerRuta, ip_controller.putactualizarIps);

//Cliente-Servidor
route.get('/cliente_servidor',middleware.protegerRuta, cliente_servidor_model.getConsultarClienteServidor);
route.post('/cliente_servidor',middleware.protegerRuta, cliente_servidor_model.postingresarClienteServidor,);
route.put('/cliente_servidor',middleware.protegerRuta, cliente_servidor_model.putactualizarClienteServidor);
route.delete('/cliente_servidor',middleware.protegerRuta, cliente_servidor_model.deleteClienteServidor);

//Usuario y Contraseña
route.post('/login',cliente_controller.postUsuarioContraseña);

//Token



module.exports = route;