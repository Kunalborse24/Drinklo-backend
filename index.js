const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./src/config/db');
const userRoutes = require('./src/routes/userRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);

sequelize.sync().then(() => {
    console.log('Database connected');
    app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
}).catch(err => console.error(err));
