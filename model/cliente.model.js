const {plus} = require('../config/cnn');

async function consultaClientes (){
    const query = 'select * from cliente';
    const result = await plus.query(query);
    return result.rows;
}

async function postingresasCliente(nombres_cliente, clave_publica_cliente,usuario,contrasena) {
    console.log(nombres_cliente, clave_publica_cliente,usuario,contrasena);
    const query = 'INSERT INTO public.cliente(nombres_cliente, clave_publica_cliente ,usuario, contrasena)VALUES ( $1, $2, $3, $4);'
    const servers = await plus.query(query, [nombres_cliente, clave_publica_cliente,usuario,contrasena]);   
    return servers.rows;    
}
async function deleteCliente(id_cliente){
    const query = 'DELETE FROM public.cliente WHERE id_cliente = $1;'
    const servers = await plus.query(query, [id_cliente]);
    return servers.rows;
}
async function putactualizarCliente(id_cliente, nombres_cliente, clave_publica_cliente,usuario,contrasena) {
    const query = 'UPDATE public.cliente SET nombres_cliente = $2 , clave_publica_cliente= $3, usuario = $4, contrasena = $5 WHERE id_cliente = $1 ;'
    const servers = await plus.query(query, [id_cliente, nombres_cliente, clave_publica_cliente,usuario,contrasena]);   
    return servers.rows;    
}

async function postUsuarioContraseña(usuario) {
    const query = 'select * from cliente where usuario = $1'
    const servers = await plus.query(query, [usuario]);   
    return servers.rows[0];    
}
module.exports ={
    consultaClientes,
    postingresasCliente,
    deleteCliente,
    putactualizarCliente,
    postUsuarioContraseña,
}