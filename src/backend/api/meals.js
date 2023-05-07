const express = require("express");
const router = express.Router();
const knex = require("../database");
//const { require } = require("app-root-path");
const Meal = require('./meals')

// router.get("/", async (request, response) => {
//   try {
//     // knex syntax for selecting things. Look up the documentation for knex for further info
//     const titles = await knex("meal").select("*");
//     response.json(titles);
//   } catch (error) {
//     throw error;
//   }
// });

/*
//Get all meals

router.get('/meals', (req, res) => {
  const meals = Meal.getAllMeals();
  res.json(meals);
});

//Add a new meal

router.post('/meals', (req, res) => {
  const meal = req.body;
  const newMeal = Meal.addNewMeal(meal);
  res.json(newMeal);
});

// Get a meal by id

router.get('./meals/:id', (req, res) => {
  const id = req.params.id;
  const mealById = Meal.getMealById(id);
  res.json(mealById);
});

// Delete a meal by id

router.delete('./meals/:id', (req, res) => {
  const id = req.params.id;
  const resultOfDelete = Meal.deleteMealById(id);
  res.json(resultOfDelete);
});

// Update a meal by id

router.put('./meals/:id', (req, res) => {
  const id = req.params.id;
  const updateMeal = req.body;
  const resultOfUpdate = Meal.updateMealById(id, updateMeal);
  res.json(resultOfUpdate);
});

module.exports = router;
*/

// GET all meals
router.get('/', (req, res) => {
  knex
    .select('*')
    .from('meal')
    .then((meals) => {
      res.status(200).json(meals);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    });
});

// POST a new meal
router.post('/', (req, res) => {
  const { name, description, price } = req.body;
  knex('meal')
    .insert({
      name: name,
      description: description,
      price: price,
    })
    .then(() => {
      res.status(201).json({ message: 'Meal created' });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    });
});

// GET a meal by id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  console.log(id)
  knex
    .select('*')
    .from('meal')
    .where({ id: id })
    .then((meal) => {
      if (meal.length) {
        res.status(200).json(meal);
      } else {
        res.status(404).json({ message: 'Meal not found' });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    });
});

// PUT a meal by id
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, description, price } = req.body;
  knex('meal')
    .where({ id: id })
    .update({
      name: name,
      description: description,
      price: price,
    })
    .then(() => {
      res.status(200).json({ message: 'Meal updated' });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    });
});

// DELETE a meal by id
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  knex('meal')
    .where({ id: id })
    .del()
    .then(() => {
      res.status(200).json({ message: 'Meal deleted' });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    });
});

module.exports = router;
