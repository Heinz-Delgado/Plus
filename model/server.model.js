const {plus} = require('../config/cnn');

async function consultaServer (){
    const query = 'select * from server';
    const result = await plus.query(query);
    return result.rows;
}

async function postingresarServer(id_sucursal, id_nodo, tipo_server, clave_publica, ip_publica, port_wireguard, subred, ip_privada, dns) {
    const query = 'INSERT INTO public.server(id_sucursal, id_nodo, tipo_server, clave_publica, ip_publica, port_wireguard, subred, ip_privada, dns)VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9);'
    const servers = await plus.query(query, [id_sucursal, id_nodo, tipo_server, clave_publica, ip_publica, port_wireguard, subred, ip_privada, dns]);   
    return servers.rows;    
}

async function deleteServer(id_server){
    const query = 'DELETE FROM public.server WHERE id_server = $1;'
    const servers = await plus.query(query, [id_server]);
    return servers.rows;
}

async function putactualizarServer(id_server,id_sucursal, id_nodo, tipo_server, clave_publica, ip_publica, port_wireguard, subred, ip_privada, dns) {
    const query = 'UPDATE public.server SET id_sucursal= $2, id_nodo = $3 , tipo_server= $4, clave_publica = $5, ip_publica= $6, port_wireguard= $7, subred= $8, ip_privada= $9, dns = $10  WHERE id_server = $1 ;'
    const servers = await plus.query(query, [id_server, id_sucursal, id_nodo, tipo_server, clave_publica, ip_publica, port_wireguard, subred, ip_privada, dns]);   
    return servers.rows;    
}

module.exports ={
    consultaServer,
    postingresarServer,
    deleteServer,
    putactualizarServer,
}