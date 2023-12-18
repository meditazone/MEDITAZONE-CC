module.exports = {
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dialect: 'mysql',
    // Hanya jika menggunakan UNIX socket di Cloud Run
    dialectOptions: {
        socketPath: process.env.INSTANCE_UNIX_SOCKET,
    },
};