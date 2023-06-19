const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");

const mealsRouter = require("./api/meals");
const reservationsRouter = require("./api/reservations")
const reviewRouter = require("./api/reviews"); // Updated import

const buildPath = path.join(__dirname, "../../dist");
const port = process.env.PORT || 3000;
const cors = require("cors");

// Add the required imports for the database connection
const mysql = require("mysql");
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

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

router.use("/reviews", reviewRouter); // Updated route

app.use(router);



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
  throw new Error("API_PATH is not set. Remember to set it in your .env file");
}

// for the frontend. Will first be covered in the react class
app.use("*", (req, res) => {
  res.sendFile(path.join(`${buildPath}/index.html`));
});

app.post("/api/reservations", (req, res) => {
  const {
    numberOfGuests,
    mealId,
    createdDate,
    contactPhoneNumber,
    contactName,
    contactEmail,
  } = req.body;

  // Create the SQL query
  const query = `INSERT INTO reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
                 VALUES (?, ?, ?, ?, ?, ?, ?)`;

  // The values for insertion
  const values = [
    numberOfGuests,
    mealId,
    createdDate,
    contactPhoneNumber,
    contactName,
    contactEmail,
  ];

  // Execute the query
  pool.query(query, values, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    } else {
      res.status(201).json({ message: "Data inserted successfully" });
    }
  });
});

app.post("/api/reviews", (req, res) => {
  const {
    nameOfMeal,
    descriptionOfMeal,
    reviewMealId,
    starsOfMeal,
    createdDate,
  } = req.body;

  // Create the SQL query
  const query = `INSERT INTO review (title, description, review_meal_id, stars, created_date)
                 VALUES (?, ?, ?, ?, ?)`;

  // The values for insertion
  const values = [
    nameOfMeal,
    descriptionOfMeal,
    reviewMealId,
    starsOfMeal,
    createdDate,
  ];

  // Execute the query
  pool.query(query, values, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    } else {
      res.status(201).json({ message: "Review inserted successfully" });
    }
  });
});

module.exports = app;
