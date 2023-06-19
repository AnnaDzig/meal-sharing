const express = require('express');
const router = express.Router();
const knex = require('../database');

router.post('/', (req, res) => {
    const {
        title,
        description,
        reviewMealId,
        stars,
        createdDate,
    } = req.body;

    // Insert the review data into the database
    knex('review')
        .insert({
            title: title,
            description: description,
            review_meal_id: reviewMealId,
            stars: stars,
            created_date: createdDate,
        })
        .then(() => {
            res.status(201).json({ message: 'Review created successfully' });
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        });
});

module.exports = router;
