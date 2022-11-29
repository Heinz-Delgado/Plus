const { Pool} = require('pg');

const inventario = new Pool({
    host: 'servergrupo1',
    port: '5432',
    database: 'inventario',
    user: 'grupo1',
    password: '$erver2022',
});

module.exports = {
    inventario
}