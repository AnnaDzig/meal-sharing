import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Bgr from "./food.png";

export const AddYourMeal = () => {
  const [inputValues, setInputValues] = useState({
    title: "",
    description: "",
    location: "",
    when: null,
    max_reservations: null,
    price: null,
  });

  const handleInput = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setInputValues((inputValues) => ({ ...inputValues, [key]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // To avoid 504 error
    if (
      inputValues.title !== "" &&
      inputValues.description !== "" &&
      inputValues.location !== "" &&
      inputValues.max_reservations !== null &&
      inputValues.price !== null &&
      inputValues.when !== null
    ) {
      const newMeal = {
        title: inputValues.title,
        description: inputValues.description,
        location: inputValues.location,
        when: inputValues.when,
        maxReservations: inputValues.max_reservations,
        price: inputValues.price,
      };

      try {
        const response = await fetch("./api.meals", {
          method: "POST",
          body: JSON.stringify(newMeal),
          headers: {
            "Content-type": "application/json",
          },
        });
        if (response.ok) {
          alert(
            "THANK YOU!! Your meal has been added to the Meal Shearing!!!!!"
          );
          return response;
        } else {
          alert(`Something went wrong: ${response.status}. Please try again`);
          return;
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please fill out all the fields");
      return;
    }
  };

  return (
    <div className="add-meal">
      <img src={Bgr} id="add-meal-bgr" alt="food" />
      <h1 className="thin-heading">Add a New Meal</h1>
      <p className="text-adding">
        If you want to share some recipe with others, please fill the form out.
      </p>
      <form className="form">
        <label>
          Title
          <input
            type="text"
            name="title"
            onChange={handleInput}
            required
          ></input>
        </label>
        <label>
          Description{" "}
          <input
            type="text"
            name="description"
            onChange={handleInput}
            required
          ></input>
        </label>
        <label>
          Location{" "}
          <input
            type="text"
            name="location"
            onChange={handleInput}
            required
          ></input>
        </label>
        <label>
          When{" "}
          <input
            type="datetime-local"
            name="when"
            onChange={handleInput}
            required
          ></input>
        </label>
        <label>
          Price{" "}
          <input
            type="number"
            name="price"
            onChange={handleInput}
            required
          ></input>
        </label>
        <label>
          Max. reservations{" "}
          <input
            type="number"
            name="max_reservations"
            onChange={handleInput}
            required
          ></input>
        </label>
        <div className="flex-buttons">
          <button className="mainButton" onClick={handleSubmit} type="submit">
            Submit
          </button>
          <Link to="/" className="ghostButton">
            <button className="submit-button" id="back">
              Back to the Homepage
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddYourMeal;
