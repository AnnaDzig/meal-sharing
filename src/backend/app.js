const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");

const mealsRouter = require("./api/meals");
const reservationsRouter = require("./api/reservations");
const buildPath = path.join(__dirname, "../../dist");
const port = process.env.PORT || 3000;
const cors = require("cors");

// For week4 no need to look into this!
// Serve the built client html
app.use(express.static(buildPath));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(cors());

router.use("/meals", mealsRouter);
router.use("/reservations", reservationsRouter);


const knex = require("./database");

//"/future-meals"	Respond with all meals in the future (relative to the when datetime)
router.get("/future-meals", async (request, response) => {
  try {
    const futureMeals = await knex("meal").select("*").where('created_data', '>=', '2023-04-02');
    response.json(futureMeals);
  }
  catch (error) {
    throw error;
  }
});

//"/past-meals"	Respond with all meals in the past (relative to the when datetime)

router.get("/past-meals", async (request, response) => {
  try {
    const pastMeals = await knex("meal").select("*").where('created_data', '<=', '2023-04-02');
    response.json(pastMeals);
  }
  catch (error) {
    throw error;
  }
});

//"/all-meals"	Respond with all meals sorted by ID

router.get("/all-meals", async (request, response) => {
  try {
    const allMeals = await knex("meal").select("*").orderBy('id', 'desc');
    response.json(allMeals);
  }
  catch (error) {
    throw error;
  }
});

//"/first-meal"	Respond with the first meal (meaning with the minimum id)

router.get("/first-meal", async (request, response) => {
  try {
    const minimumId = await knex("meal").min('id as minId');
    const firstMeal = await knex("meal").select("*").where('id', minimumId[0].minId);
    if (firstMeal.length === 0) {
      response.status(404).and("Meals not founded");
    } else {
      response.json(firstMeal);
    }
  }
  catch (error) {
    throw error;
  }
});

//"/last-meal"	Respond with the last meal (meaning with the maximum id)

router.get("/last-meal", async (request, response) => {
  try {
    const maximumId = await knex("meal").min('id as maxId');
    const lastMeal = await knex("meal").select("*").where('id', maximumId[0].maxId);
    if (lastMeal.length === 0) {
      response.status(404).and("Meals not founded");
    } else {
      response.json(lastMeal);
    }
  }
  catch (error) {
    throw error;
  }
});

if (process.env.API_PATH) {
  app.use(process.env.API_PATH, router);
} else {
  throw "API_PATH is not set. Remember to set it in your .env file"
}

// for the frontend. Will first be covered in the react class
app.use("*", (req, res) => {
  res.sendFile(path.join(`${buildPath}/index.html`));
});

module.exports = app;
