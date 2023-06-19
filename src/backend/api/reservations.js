const express = require('express');
const router = express.Router();
const knex = require('../database');

router.post('/', (req, res) => {
    const {
        id,
        numberOfGuests,
        mealId,
        createdDate,
        contactPhoneNumber,
        contactName,
        contactEmail,
    } = req.body;

    // Insert the reservation data into the database
    knex('reservation')
        .insert({
            id,
            number_of_guests: numberOfGuests,
            meal_id: mealId,
            created_date: createdDate,
            contact_phonenumber: contactPhoneNumber,
            contact_name: contactName,
            contact_email: contactEmail,
        })
        .then(() => {
            res.status(201).json({ message: 'Reservation created successfully' });
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        });
});


module.exports = router;