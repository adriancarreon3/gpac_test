const { Pool } = require('pg');

const config = {
    user: 'postgres',
    host: 'localhost',
    password: '123456',
    database: 'gpac_test'
};

const pool = new Pool(config);

module.exports = pool;