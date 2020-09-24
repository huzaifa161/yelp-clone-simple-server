const db = require('../db');


exports.getRestaurants = async (req, res) => {
    try {
        const results = await db.query('SELECT * FROM restaurants');
        res.json(results.rows);
    } catch (err) {
        console.log(err);
    }
};


exports.getSingleRestaurant = async (req, res) => {
    const { id } = req.params;
    try {
        const restaurants = await db.query('SELECT * FROM restaurants WHERE id = $1', [id]);
        const reviews = await db.query('SELECT * FROM reviews WHERE restaurant_id = $1', [id]);
        res.json({ restaurant:restaurants.rows[0], reviews:reviews.rows });
    } catch (err) {
        console.log(err);
    }
};

exports.createRestaurant = async (req, res) => {
    const { name, location, price_range } = req.body;
    try {
        const results = await db.query('INSERT INTO restaurants(name, location, price_range) VALUES($1, $2, $3) returning *', [name, location, price_range]);
        res.json(results.rows[0])
        
    } catch (err) {
        console.log(err);
    }
};

exports.updateRestaurant = async (req, res) => {
    const { name, location, price_range } = req.body;
    try {
        const results = await db.query('UPDATE restaurants SET name = $1, location=$2, price_range=$3 WHERE id = $4 returning *',
            [name, location, price_range, req.params.id]);
        res.json(results.rows[0])
        
    } catch (err) {
        console.log(err);
    }
};

exports.deleteRestaurant = async (req, res) => {
    try {
        const results = await db.query('DELETE FROM restaurants WHERE id = $1', [req.params.id]);
        res.json(results.rows[0])

    } catch (err) {
        console.log(err);
    }
};