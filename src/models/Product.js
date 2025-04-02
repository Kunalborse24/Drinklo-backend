const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Category = require('./Category'); // Import the Category model

const Product = sequelize.define('Product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
    description: { type: DataTypes.STRING },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Category, // Refers to Category model
            key: 'id'
        }
    }
});

// Define the relationships (associations)
Product.belongsTo(Category, { foreignKey: 'categoryId' }); // A product belongs to a category
Category.hasMany(Product, { foreignKey: 'categoryId' });  // A category has many products

module.exports = Product;
