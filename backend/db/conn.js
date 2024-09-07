//connection
const { Client } = require('pg');
const client = new Client({
    user: 'mypostgres',
    host: 'mylocalhost',
    database: 'mydatabase',
    password: 'mypassword',
    port: 5555,
});

async function check() {
    await client.connect()
    /* const res = await client.query('SELECT * from blogs')
     console.log(res.rows[0]) // Hello world!
     await client.end()*/
}
check();


module.exports = client;
