const {inventario} = require('../config/cnn');

async function consultaProducto (){
    const query = 'select * from producto';
    const result = await inventario.query(query);
    return result.rows;
}
async function postingresarProducto(prod_codigo, cat_codigo,prod_nombre,prod_descripcion,prod_iva,prod_costo,prod_pvp,prod_estado,prod_totalstock) {
    const query = 'INSERT INTO public.producto(prod_codigo, cat_codigo, prod_nombre, prod_descripcion, prod_iva, prod_costo, prod_pvp, prod_estado, prod_totalstock) VALUES ( $1, $2,$3,$4,$5,$6,$7,$8,$9);'
    const servers = await inventario.query(query, [prod_codigo, cat_codigo,prod_nombre,prod_descripcion,prod_iva,prod_costo,prod_pvp,prod_estado,prod_totalstock]);   
    return servers.rows;    
}
 async function ActualizarProducto(prod_codigo, cat_codigo,prod_nombre,prod_descripcion,prod_iva,prod_costo,prod_pvp,prod_estado,prod_totalstock) {
 const query = 'UPDATE public.producto SET cat_codigo=$2, prod_nombre=$3, prod_descripcion=$4, prod_iva=$5, prod_costo=$6, prod_pvp=$7, prod_estado=$8, prod_totalstock=$9 WHERE prod_codigo =$1;'
     const servers = await inventario.query(query, [prod_codigo, cat_codigo,prod_nombre,prod_descripcion,prod_iva,prod_costo,prod_pvp,prod_estado,prod_totalstock]);   
     return servers.rows;    
 }
async function deleteProducto(prod_codigo){
    const query = 'DELETE FROM public.producto WHERE prod_codigo = $1;'
    const servers = await inventario.query(query, [prod_codigo]);
    return servers.rows;
}

module.exports ={
    consultaProducto,
    postingresarProducto,
    deleteProducto,
    ActualizarProducto
    
}