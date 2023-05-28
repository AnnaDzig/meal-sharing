import React, { useState } from "react";
import axios from "axios";

const Reservation = () => {
  const initialFormData = {
    numberOfGuests: "",
    mealId: "",
    createdDate: "",
    contactPhoneNumber: "",
    contactName: "",
    contactEmail: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/reservations", formData)
      .then((response) => {
        console.log(response.data.message);
        setSuccessMessage("The reservation made successfully");
        setFormData(initialFormData); // Reset form inputs
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
  };

  return (
    <div className="reservation-container">
      <div className="meal-image-block">
        <img
          className="meal-image"
          src="https://thumbs.dreamstime.com/b/restaurant-chillin…erved-concept-food-table-reservation-80928343.jpg"
          alt="Meal"
        />
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <label>
          Number of Guests:
          <input
            type="text"
            name="numberOfGuests"
            value={formData.numberOfGuests}
            onChange={handleChange}
          />
        </label>
        <label>
          Meal ID:
          <input
            type="text"
            name="mealId"
            value={formData.mealId}
            onChange={handleChange}
          />
        </label>
        <label>
          Created Date:
          <input
            type="datetime-local"
            name="createdDate"
            value={formData.createdDate}
            onChange={handleChange}
          />
        </label>
        <label>
          Contact Phone Number:
          <input
            type="text"
            name="contactPhoneNumber"
            value={formData.contactPhoneNumber}
            onChange={handleChange}
          />
        </label>
        <label>
          Contact Name:
          <input
            type="text"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
          />
        </label>
        <label>
          Contact Email:
          <input
            type="text"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default Reservation;
