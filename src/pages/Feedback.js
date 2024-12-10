import React, { useState } from 'react';
import '../Style/Feedback.css'; // Link to your CSS file

function Feedback() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const feedbackData = { name, email, feedback, rating };

    fetch('http://localhost:8081/api/feedbacks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(feedbackData),
    })
      .then((response) => {
        if (response.ok) {
          setSuccessMessage('Thank you for your feedback!');
          setName('');
          setEmail('');
          setFeedback('');
          setRating(0);
        } else {
          throw new Error('Failed to submit feedback');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="feedback-container">
      <h1>Feedback</h1>
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Your feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        ></textarea>
        <div className="rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => setRating(star)}
              style={{ cursor: 'pointer', color: star <= rating ? 'gold' : '#ccc' }}
            >
              ★
            </span>
          ))}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Feedback;
