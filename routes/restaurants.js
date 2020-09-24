
const express = require('express');
const router = express.Router();

const { getRestaurants, getSingleRestaurant, createRestaurant, updateRestaurant, deleteRestaurant } = require('../controllers/restaurants');

router.get('/', getRestaurants);

router.get('/:id', getSingleRestaurant);

router.post('/add-restaurant', createRestaurant);

router.put('/:id', updateRestaurant);

router.delete('/:id', deleteRestaurant);


module.exports = router;