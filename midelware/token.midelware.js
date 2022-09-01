const jwt = require ('jsonwebtoken');

function validarToken(token) {
    var codigo = 0;
    jwt.verify(token, 'secretkey', (err, decoded) => {
        if (err) {
            codigo = 1;
        } else {
            codigo = decoded;
        }
    });
    return codigo;
}

function protegerRuta(req, res, next) {
    const token = req.headers['access-token'];
    if (token)
    {
        const codigo = validarToken(token);
        if (codigo == 1) {
            res.status(401).send ({mensaje: 'Token invalido'});
            
    }else{
        req.user = codigo;
        next();
    }
}else{
    res.status(401).send({mensaje: 'Token no ingresado'});
}
}

module.exports ={
    protegerRuta,
}