const {inventario} = require('../config/cnn');

async function consultaCategoria (){
    const query = 'select * from categoria';
    const result = await inventario.query(query);
    return result.rows;
}
async function postingresarCategoria(cat_codigo, cat_nombre, descriocion_) {
    const query = 'INSERT INTO public.categoria(cat_codigo, cat_nombre, descriocion_) VALUES ( $1, $2,$3);'
    const servers = await inventario.query(query, [cat_codigo, cat_nombre, descriocion_]);   
    return servers.rows;    
}
 async function ActualizarCategoria(cat_codigo, cat_nombre, descriocion_) {
 const query = 'UPDATE public.categoria SET cat_nombre=$2, descriocion_=$3 WHERE cat_codigo =$1;'
     const servers = await inventario.query(query, [cat_codigo, cat_nombre, descriocion_]);   
     return servers.rows;    
 }
async function deleteCategoria(cat_codigo){
    const query = 'DELETE FROM public.categoria WHERE cat_codigo = $1;'
    const servers = await inventario.query(query, [cat_codigo]);
    return servers.rows;
}
module.exports ={
    consultaCategoria,
    postingresarCategoria,
    ActualizarCategoria,
    deleteCategoria
  
    
}