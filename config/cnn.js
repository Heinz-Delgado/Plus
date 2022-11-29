const { Pool} = require('pg');

const inventario = new Pool({
    host: 'servergrupo1.postgres.database.azure.com',
    port: '5432',
    database: 'inventario',
    user: 'grupo1',
    password: '$erver2022',
    ssl : {rejectUnauthorized:false}
});

module.exports = {
    inventario
}