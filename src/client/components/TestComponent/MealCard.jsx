import React from "react";
import PropTypes from "prop-types";

const MealCard = ({ meal }) => {
  const { title, description, price, imageURL } = meal;
  console.log(meal);

  return (
    <div className="meal-card">
      <h3 className="meal-title">{title}</h3>
      <img className="meal-image" src={imageURL} alt={title} />
      <p className="meal-description">Ingredients: {description}</p>
      <p className="meal-price">Price: {price}</p>
    </div>
  );
};

MealCard.propTypes = {
  meal: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default MealCard;
