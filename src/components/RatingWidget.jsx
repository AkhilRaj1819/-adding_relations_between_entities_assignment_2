import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function RatingWidget({ productId, onRatingSubmit }) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleStarHover = (value) => {
    setHoveredRating(value);
  };

  const handleStarLeave = () => {
    setHoveredRating(0);
  };

  const handleSubmit = () => {
    if (rating >= 1 && rating <= 5) {
      onRatingSubmit(productId, rating);
      
    }
  };

  return (
    <div className="rating-widget">
      <div className="stars-container" onMouseLeave={handleStarLeave}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${
              (hoveredRating >= star || (!hoveredRating && rating >= star))
                ? 'filled'
                : ''
            }`}
            onClick={() => handleStarClick(star)}
            onMouseEnter={() => handleStarHover(star)}
          >
            ★
          </span>
        ))}
      </div>
      <button 
        className="submit-rating-btn"
        onClick={handleSubmit}
        disabled={rating === 0}
      >
        Submit Rating
      </button>
    </div>
  );
}

RatingWidget.propTypes = {
  productId: PropTypes.number.isRequired,
  onRatingSubmit: PropTypes.func.isRequired
};

export default RatingWidget;
