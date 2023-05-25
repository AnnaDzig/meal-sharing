import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "./logo.png";

const Meal = () => {
  const { id } = useParams(); // Get the meal ID from the URL parameter

  // Example meal data
  const meal = {
    id: 1,
    title: "Classic Cheesecake",
    description:
      "Cream cheese, caster sugar, sour cream, eggs, butter, cracker crumbs, berries",
    availableReservations: 5,
    image:
      "https://mambeno.dk/wp-content/uploads/2020/04/Cheesecake-scaled.jpg",
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleReservationSubmit = (e) => {
    e.preventDefault();

    // Make a POST request to create a new reservation
    const reservationData = {
      mealId: meal.id,
      name,
      email,
      phone,
    };

    // Make the API call using fetch or your preferred library
    fetch("/api/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reservationData),
    })
      .then((response) => {
        if (response.ok) {
          // Reservation successful
          alert("Reservation created successfully!");
          // Reset form fields
          setName("");
          setEmail("");
          setPhone("");
        } else {
          // Error occurred during reservation
          alert("Failed to create reservation. Please try again.");
        }
      })
      .catch((error) => {
        // Handle error
        console.error("Error creating reservation:", error);
        alert("An error occurred. Please try again later.");
      });
  };

  // Example review functionality
  const [review, setReview] = useState("");
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    // Make a POST request to submit the review
    const reviewData = {
      mealId: meal.id,
      review,
    };
    // Make the API call and handle the response
    // ...
  };

  return (
    <div>
      <img className="meal-image" src={meal.image} alt="Meal" />
      <h2>{meal.title}</h2>
      <p>{meal.description}</p>

      {meal.availableReservations > 0 && (
        <form onSubmit={handleReservationSubmit}>
          <h3>Make a Reservation</h3>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Link to="/">
            <div className="forImg logo-text">
              <img src={Logo} id="logo" alt="Logo" /> Meal Sharing
            </div>
          </Link>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <button type="submit">Submit Reservation</button>
        </form>
      )}

      <h3>Leave a Review</h3>
      <form onSubmit={handleReviewSubmit}>
        <label htmlFor="review">Your Review:</label>
        <textarea
          id="review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          required
        ></textarea>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default Meal;
