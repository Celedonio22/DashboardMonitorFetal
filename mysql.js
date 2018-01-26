const database = () => {
    const mysql = require('mysql2');
    const Sequelize = require('sequelize');
    const Op = Sequelize.Op;

    const sequelize = new Sequelize('node_mysql', 'root', '', {
        operatorsAliases: {
            $and: Op.and
        },

        host: 'localhost',
        dialect: 'mysql',

        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    });

    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
    return sequelize;
}
module.exports = { database: database };