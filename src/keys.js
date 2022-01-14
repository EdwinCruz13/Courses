//configuration file using a sqlserver connection string
module.exports = {
    config: {
        user: 'sa',
        password: 'Iss2015@2015',
        server : '192.168.101.5',
        port: 1433,
        database: 'InversionesNet',
        connectionTimeout: 30000,
        options: {
            // If you are on Microsoft Azure, you need encryption:
            encrypt: false
        }
    }
}