const {plus} = require('../config/cnn');

async function consultar (){
    const query = 'SELECT * FROM nodo;';
    const result = await plus.query(query);
    return result.rows;
}
async function postingresarNodo(tipo_nodo) {
    const query = 'INSERT INTO public.nodo (tipo_nodo) VALUES ($1 );' 
    await plus.query(query, [tipo_nodo]);   
}

async function deleteNodo(id_nodo){
    const query = 'DELETE FROM public.nodo WHERE id_nodo = $1;'
    await plus.query(query, [id_nodo]);
}

async function putActualizarNodo(id_nodo, tipo_nodo){
    const query = 'UPDATE public.nodo SET tipo_nodo = $2 WHERE id_nodo = $1;'
    const actualizar = await plus.query(query, [id_nodo, tipo_nodo]);
}


module.exports ={
    consultar,
    postingresarNodo,
    deleteNodo,
    putActualizarNodo,
}