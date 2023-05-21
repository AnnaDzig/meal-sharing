import React, { useEffect, useState } from "react";

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
    <div>
      <h2>Meals List</h2>
      {meals.map((meal) => (
        <div key={meal.id}>
          <h3>{meal.title}</h3>
          <p>{meal.description}</p>
          <p>Price: {meal.price}</p>
        </div>
      ))}
    </div>
  );
};

export default MealsList;
