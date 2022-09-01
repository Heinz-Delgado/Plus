const {plus} = require('../config/cnn');

async function consultaClienteServidor (){
    const query = 'select * from cliente_servidor';
    const result = await plus.query(query);
    return result.rows;
}
async function postingresarClienteServidor(id_cliente, id_server) {
    const query = 'INSERT INTO public.cliente_servidor(id_cliente, id_server)VALUES ( $1, $2);'
    const servers = await plus.query(query, [id_cliente, id_server]);   
    return servers.rows;    
}
async function putactualizarClienteServidor(id_cliente, id_server) {
    const query = 'UPDATE public.cliente_servidor SET id_cliente= $2  WHERE id_server = $1 ;'
    const servers = await plus.query(query, [id_cliente, id_server]);   
    return servers.rows;    
}
async function deleteClienteServidor(id_cliente){
    const query = 'DELETE FROM public.cliente_servidor WHERE id_cliente = $1;'
    const servers = await plus.query(query, [id_cliente]);
    return servers.rows;
}

module.exports ={
    consultaClienteServidor,
    postingresarClienteServidor,
    putactualizarClienteServidor,
    deleteClienteServidor,
}