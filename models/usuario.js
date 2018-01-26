const userCreate = (firstName, lastName) => {
    const Sequelize = require('sequelize');
    var mysql = require("../mysql.js");
    var connect = mysql.database();
    const User = connect.define('user', {
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        }
    });
    // force: true will drop the table if it already exists
    User.sync({ force: false }).then(() => {
        // Table created
        return User.create({
            firstName: firstName,
            lastName: lastName
        });
    });
    User.findOne().then(user => {
        console.log(user.get('firstName'));
    });
}
module.exports = { userCreate: userCreate };