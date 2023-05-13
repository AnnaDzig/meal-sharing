const express = require("express");
const router = express.Router();
const knex = require("../database");
//const { require } = require("app-root-path");
const Rreservation = require('./reservations')

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
    const { date, phonenumber, name } = req.body;
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

module.exports = router;