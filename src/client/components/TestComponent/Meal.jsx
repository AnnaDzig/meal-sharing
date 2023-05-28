import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Meal = () => {
  const { id } = useParams();
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

    const reservationData = {
      mealId: meal.id,
      name,
      email,
      phone,
    };

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
  };

  return (
    <div>
      <div className="meal-image-block">
        <img className="meal-image" src={meal.image} alt="Meal" />
      </div>
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
