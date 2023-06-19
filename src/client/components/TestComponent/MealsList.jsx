import React, { useEffect, useState } from "react";
import MealCard from "./MealCard";

const MealsList = () => {
  const [meals, setMeals] = useState([]);

  const fetchMeals = async () => {
    try {
      const response = await fetch("http://localhost:3005/api/meals");
      const data = await response.json();
      setMeals(data);
    } catch (error) {
      console.error("Error fetching meals:", error);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  console.log(meals);

  return (
    <div className="meals-list">
      <h2>Meals List</h2>
      <div className="meals-grid">
        {meals.map((meal) => (
          <MealCard key={meal.id} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default MealsList;
