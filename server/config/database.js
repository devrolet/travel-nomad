const Sequelize = require('sequelize');

module.exports = new Sequelize('travelnomad', 'root', 'root', {
    host:'127.0.0.1',
    port: '8889',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        timestamps: false
    },
    operatorsAliases: false
})