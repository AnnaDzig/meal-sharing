import React, { useState } from "react";
import axios from "axios";

const Review = () => {
  const [reviewData, setReviewData] = useState({
    title: "",
    description: "",
    reviewMealId: "",
    stars: "",
    createdDate: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setReviewData({ ...reviewData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make a POST request to the review API endpoint
    axios
      .post("/api/reviews", reviewData)
      .then((response) => {
        console.log(response.data.message);
        setSuccessMessage("Review submitted successfully!");
        setReviewData({
          title: "",
          description: "",
          reviewMealId: "",
          stars: "",
          createdDate: "",
        });
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
  };

  return (
    <div className="review-container">
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Name of the dish:
          <input
            type="text"
            name="title"
            value={reviewData.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Leave a comment:
          <input
            type="text"
            name="description"
            value={reviewData.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Review Meal ID:
          <input
            type="text"
            name="reviewMealId"
            value={reviewData.reviewMealId}
            onChange={handleChange}
          />
        </label>
        <label>
          Rate the dish from 1 to 5:
          <input
            type="number"
            name="stars"
            value={reviewData.stars}
            onChange={handleChange}
            min="1"
            max="5"
          />
        </label>
        <label>
          Created Date:
          <input
            type="datetime-local"
            name="createdDate"
            value={reviewData.createdDate}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default Review;
