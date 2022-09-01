const {plus} = require('../config/cnn');

async function consulta (){
    const query = 'select * from sucursal';
    const result = await plus.query(query);
    return result.rows;
}

async function postingresarSucursal(nombre_sucursal) {
    const query = 'INSERT INTO public.sucursal (nombre_sucursal) VALUES ($1 );' 
    await plus.query(query, [nombre_sucursal]);   
}

async function deleteSucursal(id_sucursal){
    const query = 'DELETE FROM public.sucursal WHERE id_sucursal = ($1 );'
    await plus.query(query, [id_sucursal]);
}

async function putActualizarSucursal(id_sucursal, nombre_sucursal){
    const query = 'UPDATE public.sucursal SET nombre_sucursal = $2 WHERE id_sucursal = $1;'
    const actualizar = await plus.query(query, [id_sucursal, nombre_sucursal]);
}
module.exports ={
    consulta,
    postingresarSucursal,
    deleteSucursal,
    putActualizarSucursal,
}