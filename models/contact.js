module.exports = (sequelize, DataTypes) => {
// const { DataTypes } = require('sequelize');
// const sequelize = require('./index');

const Contact = sequelize.define('Contact', {
    // Model arrtibutes are defined here
    permanent_address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    current_address: {
        type: DataTypes.STRING,
        // allowNull defaults to true
    }
}, {
    // Other model options go here
});
}
// module.exports = Contact;