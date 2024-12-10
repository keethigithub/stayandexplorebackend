// src/pages/Reviews.js
import React, { useState } from 'react';

const Reviews = () => {
  // Sample reviews data
  const [reviews, setReviews] = useState([
    { id: 1, tourist: 'Alice', review: 'Great tour, highly recommend!' },
    { id: 2, tourist: 'Bob', review: 'Wonderful experience, would love to visit again!' },
  ]);

  const deleteReview = (id) => {
    setReviews(reviews.filter((review) => review.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Reviews</h1>
      {reviews.length === 0 ? (
        <p>No reviews available.</p>
      ) : (
        reviews.map((review) => (
          <div key={review.id} style={{ marginBottom: '10px' }}>
            <p><strong>{review.tourist}:</strong> {review.review}</p>
            <button onClick={() => deleteReview(review.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Reviews;
