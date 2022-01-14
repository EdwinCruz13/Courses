//instance the sql server modulo into an object
const sqlServer = require('mssql');

//adquire database setting file
const { config } = require('./keys');


//create a pool using connectionpool from sqlserver package
const pool = new sqlServer.ConnectionPool(config).connect().then(pool => {
    console.log('Connected to MSSQL')
    return pool;
}).catch(err => console.log('Database Connection Failed! Bad Config: ', err));
sqlServer.connect(config);



//export as module
module.exports = {
    pool, sqlServer
};

