// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/db');

// const User = sequelize.define('User', {
//     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     name: { type: DataTypes.STRING, allowNull: false },
//     email: { type: DataTypes.STRING, allowNull: false, unique: true },
//     password: { type: DataTypes.STRING, allowNull: false }
// });

// module.exports = User;

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    mobileNo: { 
        type: DataTypes.STRING, 
        allowNull: false, 
        unique: true,
        validate: {
            is: /^[0-9]{10}$/,  // Assuming the mobile number should be 10 digits
        }
    }
});

module.exports = User;
