const express = require("express");
const routerReviews = express.Router();
const knex = require("../database");
//const { require } = require("app-root-path");
const Review = require('./reviews')

// GET all reviews
routerReviews.get('/', (req, res) => {
    knex
        .select('*')
        .from('review')
        .then((reviews) => {
            res.status(200).json(reviews);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        });
});

// ADD a new review to the database
routerReviews.post("/", async (request, response) => {
    const newReview = request.body;
    try {
        await knex('review')
            .insert(newReview)

        response.status(201).send(newReview);
    } catch (err) {
        response.status(500).json({
            err: 'An error occurred while creating a review'
        });
    }
});


//RETURN a review by id
routerReviews.get("/:id", async (request, response) => {
    const reviewId = Number(request.params.id);

    try {
        const review = await (knex.select('*')
            .from('review')
            .where('id', reviewId))
            .first();

        if (!review) {
            response.status(404).send(`Review with Id ${reviewId} is not found`);
        }
        response.json(review);
    } catch (err) {
        response.status(500).send(err);
    }
});


// UPDATE the review by id
routerReviews.put("/:id", async (request, response) => {
    const reviewId = Number(request.params.id);
    const updatedReview = request.body;
    try {
        const review = await knex('review')
            .where("id", reviewId)
            .update(updatedReview)

        if (!review) {
            response.status(404).send(`Review with id ${reviewId} not found`);
        } else {
            response.status(200).json({
                message: `Review with id ${reviewId} updated successfully`
            });
        }

    } catch (error) {
        response.status(500).json({
            error: 'An error occurred while updating a review'
        });
    }
});


// DELETE the review by id
routerReviews.delete("/:id", async (request, response) => {
    const reviewId = Number(request.params.id);

    try {
        const deletedReview = await knex('review')
            .where('id', reviewId)
            .del();

        if (deletedReview === 0) {
            return response.status(404).json({
                error: `Review with id ${reviewId} does not exist`
            });
        }

        response.status(204).end();
    } catch (error) {
        response.status(500).json({
            error: 'An error occurred while deleting a review'
        });
    }
})

module.exports = routerReviews;