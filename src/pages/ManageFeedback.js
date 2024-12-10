import React, { useEffect, useState } from 'react';

function ManageFeedback() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:8081/api/feedbacks')
      .then((response) => response.json())
      .then((data) => setFeedbacks(data))
      .catch((error) => setError('Failed to fetch feedbacks.'));
  }, []);

  return (
    <div className="manage-feedback">
      <h1>Manage Feedback</h1>
      {error && <p className="error">{error}</p>}
      {feedbacks.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Feedback</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((fb) => (
              <tr key={fb.id}>
                <td>{fb.name}</td>
                <td>{fb.email}</td>
                <td>{fb.feedback}</td>
                <td>{fb.rating} ★</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No feedback available.</p>
      )}
    </div>
  );
}

export default ManageFeedback;
