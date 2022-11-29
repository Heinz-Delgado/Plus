 const express = require('express');
 const app = express();

 const PORT = process.env.PORT || 4000;

 app.use(express.json());
 app.use(express.urlencoded({extended: true}));

// //HABILITAR CORS
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, access-token");
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//     next();
// });

 app.use(require('./routes/routes'))

 app.listen(PORT, () => {
     console.log(`Servidor se encuentra en //http://localhost:${PORT}`);
 });