const express = require("express");
const router = express.Router();
const knex = require("../database");
//const { require } = require("app-root-path");
const Meal = require('./meals')

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


const app = express();

app.get('/api/meals', (req, res) => {
  // Parse query parameters
  const { maxPrice, availableReservations, title, dateAfter, dateBefore, limit, sortKey, sortDir } = req.query;

  // Build the database query
  const query = knex.select('*').from('meals');

  // Apply filters
  if (maxPrice) {
    query.where('price', '<', maxPrice);
  }
  if (availableReservations) {
    const reservationsOperator = availableReservations === 'true' ? '>' : '=';
    query.where('available_reservations', reservationsOperator, 0);
  }
  if (title) {
    query.where('title', 'like', `%${title}%`);
  }
  if (dateAfter) {
    query.where('date', '>', dateAfter);
  }
  if (dateBefore) {
    query.where('date', '<', dateBefore);
  }

  // Apply sorting
  if (sortKey) {
    const direction = sortDir === 'desc' ? 'desc' : 'asc';
    query.orderBy(sortKey, direction);
  }

  // Apply limit
  if (limit) {
    query.limit(limit);
  }

  // Execute the query
  query
    .then((results) => {
      res.json(results);
    })
    .catch((error) => {
      res.status(500).json({ error: 'An error occurred' });
    });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

module.exports = router;
