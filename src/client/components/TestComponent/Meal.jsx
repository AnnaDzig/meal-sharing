import React from "react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";

const Meal = ({ meal }) => {
  return (
    <div>
      <img src={meal.image} alt={meal.title} />
      <h2>{meal.title}</h2>
      <p>{meal.description}</p>
      <h3>Ingredients:</h3>
      <ul>
        {meal.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <StarRating rating={meal.stars} />
      <Link to={`/meals/${meal.id}`}>View Details</Link>
    </div>
  );
};

export default Meal;
