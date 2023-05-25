import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import the CSS file for component-specific styles

const Home = () => {
  // Example meals data
  const meals = [
    {
      id: 1,
      title: "Spaghetti Bolognese",
      description: "Classic Italian pasta dish with meat sauce",
      image:
        "https://www.opskrifter.dk/images/recipes/0XkmqwPM6gBf0zKw0vgSGyhSKgky2DQSiSmvwyxN.jpeg",
    },
    {
      id: 2,
      title: "Chicken Stir-Fry",
      description: "Stir-fried chicken and vegetables in a flavorful sauce",
      image:
        "https://mccormick.widen.net/content/zfgopgfgrz/original/vegetable_and_chicken_stir_fry2000x1125.jpg",
    },
    {
      id: 3,
      title: "Margherita Pizza",
      description:
        "Traditional Italian pizza with tomatoes, mozzarella, and basil",
      image:
        "https://www.valdemarsro.dk/wp-content/2011/05/pizza-margharita-1.jpg",
    },
  ];

  return (
    <div>
      <h1>Meal Sharing App</h1>
      <h2>Discover Delicious Meals</h2>

      <section className="meals-section">
        <h3>Featured Meals</h3>
        <div className="meals-grid">
          {meals.map((meal) => (
            <div key={meal.id} className="meal-card">
              <img src={meal.image} alt={meal.title} />
              <h4>{meal.title}</h4>
              <p>{meal.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Link to="/meals" className="button">
        View All Meals
      </Link>
    </div>
  );
};

export default Home;
