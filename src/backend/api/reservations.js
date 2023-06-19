
const router = express.Router();
const knex = require('../database');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use('/reservations', router);

// POST endpoint to handle data insertion
router.post('/api/reservations', async (req, res) => {
    try {
        const { id, numberOfGuests, mealId, createdDate, contactPhoneNumber, contactName, contactEmail } = req.body;

        // Insert data using knex
        await knex('reservation').insert({
            id,
            number_of_guests: numberOfGuests,
            meal_id: mealId,
            created_date: createdDate,
            contact_phonenumber: contactPhoneNumber,
            contact_name: contactName,
            contact_email: contactEmail,
        });

        res.status(201).json({ message: 'Data inserted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
=======
const express = require("express");
const router = express.Router();
const knex = require("../database");
//const { require } = require("app-root-path");
const Rreservation = require('./reservations')

// Start the server

//Get all reservations

router.get('/reservations', (req, res) => {
    const reservations = Rreservation.getAllReservations();
    res.json(reservations);
});

//Add a new reservation

router.post('/reservations', (req, res) => {
    const reservations = req.body;
    const newReservation = Rreservation.addNewMeal(reservations);
    res.json(newReservation);
});

// Get a reservation by id

router.get('./reservations/:id', (req, res) => {
    const id = req.params.id;
    const reservationById = Rreservation.getReservationById(id);
    res.json(reservationById);
});

// Delete a reservation by id

router.delete('./reservations/:id', (req, res) => {
    const id = req.params.id;
    const resultOfDelete = Rreservation.deleteReservationById(id);
    res.json(resultOfDelete);
});

// Update a reservation by id

router.put('./reservations/:id', (req, res) => {
    const id = req.params.id;
    const updatereseRvation = req.body;
    const resultOfUpdate = Rreservation.updateReservationById(id, updatereseRvation);
    res.json(resultOfUpdate);
});

module.exports = router;


// GET all reservations
router.get('/', (req, res) => {
    knex
        .select('*')
        .from('reservation')
        .then((reservations) => {
            res.status(200).json(reservations);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        });
});

// POST adds a new reservation to the database
router.post('/', (req, res) => {
    const { created_date, contact_phonenumber, contact_name } = req.body;

    knex('reservation')
        .insert({
            date: date,
            phonenumber: phonenumber,
            name: name,
        })
        .then(() => {
            res.status(201).json({ message: 'Reservation created' });
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        });
});

// GET a reservation by id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    knex
        .select('*')
        .from('reservation')
        .where({ id: id })
        .then((reservation) => {
            if (reservation.length) {
                res.status(200).json(reservation);
            } else {
                res.status(404).json({ message: 'Reservation not found' });
            }
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        });
});

// PUT a reservation by id
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { date, phonenumber, name } = req.body;
    knex('reservation')
        .where({ id: id })
        .update({
            date: date,
            phonenumber: phonenumber,
            name: name,
        })
        .then(() => {
            res.status(200).json({ message: 'Reservation updated' });
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        });
});

// DELETE a reservation by id
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    knex('reservetion')
        .where({ id: id })
        .del()
        .then(() => {
            res.status(200).json({ message: 'Reservetion deleted' });
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        });

});

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

});

