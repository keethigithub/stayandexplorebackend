// src/components/Card.js
import React from 'react';

function Card({ data }) {
  return (
    <div className="card">
      <h2>{data.name}</h2>
      <p>{data.description}</p>
      <button>Book Now</button>
    </div>
  );
}

export default Card;
