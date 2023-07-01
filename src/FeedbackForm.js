import React, { useState } from 'react';

import './FeedbackForm.css';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [selectedStars, setSelectedStars] = useState(0);

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleRatingChange = (event) => {
    const selectedRating = Number(event.target.value);
    setRating(selectedRating);
    setSelectedStars(selectedRating);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(feedback)
    console.log(rating);
    setFeedback('');
    setRating(0);
    setSelectedStars(0);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starClass = i <= selectedStars ? 'star active' : 'star';
      stars.push(
        <label key={i}>
          <input
            type="radio"
            name="rating"
            value={i}
            checked={rating === i}
            onChange={handleRatingChange}
          />
          <span className={starClass}>&#9733;</span>
        </label>
      );
    }
    return stars;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="feedback">Feedback:</label>
        <textarea
          id="feedback"
          value={feedback}
          onChange={handleFeedbackChange}
          required
        />
      </div>
      <div>
        <label htmlFor="rating">Rating:</label>
        <div className="stars">{renderStars()}</div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
