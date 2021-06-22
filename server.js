const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const productsRoutes = require('./Routes/productsRoutes');

const app = express();

dotenv.config();

app.use('/api/products', productsRoutes);


mongoose
    .connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log('We are connected to the database'))
    .catch(() => console.log('We are not connected to the database'));

app.listen(4000, () => console.log('Server is ready for requests.'));