require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());

const restaurantRoutes = require('./routes/restaurants');

app.use('/api/restaurants', restaurantRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`port running on ${port}`);
})