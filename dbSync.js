// dbSync.js
//File for Sync the database (drops and recreates tables)

const sequelize = require('./src/config/db');
const User = require('./src/models/User'); 
const Product = require('./src/models/Product');  // Import Product model
const Category = require('./src/models/Category');  // Import Category model

sequelize.sync({ force: true })  // Sync the database (drops and recreates tables)
    .then(() => {
        console.log('Database synced');
        process.exit();  // Exit the process after syncing (optional)
    })
    .catch((err) => {
        console.error('Error syncing database:', err);
        process.exit(1);  // Exit with error status if sync fails
    });
