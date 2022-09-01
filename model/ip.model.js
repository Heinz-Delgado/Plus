const {plus} = require('../config/cnn');

async function consultaIp (){
    const query = 'select * from ips';
    const result = await plus.query(query);
    return result.rows;
}

async function postingresarIps(id_server, allowed) {
    const query = 'INSERT INTO public.ips(id_server, allowed)VALUES ( $1, $2);'
    const servers = await plus.query(query, [id_server, allowed]);   
    return servers.rows;    
}
async function deleteIps(id_allowed_ips){
    const query = 'DELETE FROM public.ips WHERE id_allowed_ips = $1;'
    const servers = await plus.query(query, [id_allowed_ips]);
    return servers.rows;
}
async function putactualizarIps(id_allowed_ips,id_server, allowed) {
    const query = 'UPDATE public.ips SET id_server= $2, allowed = $3  WHERE id_allowed_ips = $1 ;'
    const servers = await plus.query(query, [id_allowed_ips,id_server, allowed]);   
    return servers.rows;    
}


module.exports ={
    consultaIp,
    postingresarIps,
    deleteIps,
    putactualizarIps,


}