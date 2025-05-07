import React from 'react';
import PropTypes from 'prop-types';
import RatingWidget from './RatingWidget';
import '../App.css';

function ProductCard({ product, onRatingSubmit }) {
  const { id, name, description, image, avgRating, totalRatings } = product;

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h2 className="product-name">{name}</h2>
        <p className="product-description">{description}</p>
        <div className="product-rating">
          <span className="avg-rating">Average Rating: {avgRating.toFixed(1)}</span>
          <span className="total-ratings">({totalRatings} ratings)</span>
        </div>
        <RatingWidget 
          productId={id} 
          onRatingSubmit={onRatingSubmit} 
        />
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    avgRating: PropTypes.number.isRequired,
    totalRatings: PropTypes.number.isRequired
  }).isRequired,
  onRatingSubmit: PropTypes.func.isRequired
};

export default ProductCard;
