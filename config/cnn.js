const { Pool} = require('pg');

const plus = new Pool({
    host: 'localhost',
    port: '5432',
    database: 'plus',
    user: 'postgres',
    password: '5432',
});

module.exports = {
    plus
}