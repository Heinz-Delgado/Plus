const { Router } = require('express');
//const { CconsultaProducto } = require('../model/productos.model');
const productos_controller = require('../controller/productos.controller');
const categoria_controller = require('../controller/categoria.controller');



const route = Router();
route.get('/producto', productos_controller.getConsultarProducto);
route.post('/producto', productos_controller.postingresarProducto);
route.delete('/producto', productos_controller.deleteProducto);
route.put('/producto', productos_controller.putActualizarProducto);

//categoria
route.get('/categoria', categoria_controller.getConsultarCategoria);
route.post('/categoria', categoria_controller.postingresarCategoria);
route.delete('/categoria', categoria_controller.deleteCategoria);
route.put('/categoria', categoria_controller.putActualizarCategoria);
module.exports = route;
