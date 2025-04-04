const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./src/config/db');
const userRoutes = require('./src/routes/userRoutes');
const productRoutes = require('./src/routes/productRouter');
const catagoryRouter = require('./src/routes/catagoryRouter');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);
// Use product routes under '/api/products'
app.use('/api/products', productRoutes); 
// Use Catagory routes under '/api/catagory'
app.use('/api/catagory', catagoryRouter); 

sequelize.sync().then(() => {
    console.log('Database connected');
    app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
}).catch(err => console.error(err));
