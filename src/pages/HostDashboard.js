import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/HostDashboard.css'; // CSS file for enhanced styling

const HostDashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Host Dashboard</h2>
        <ul>
          <li><Link to="/Hostinsights">Host Insights</Link></li>
          <li><Link to="/bookings">About</Link></li>
          <li><Link to="/manage-feedback">Manage Feedback</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
      </aside>
      <div className="dashboard-content">
        <h3>Welcome, Host!</h3>
        <p>Manage your homestay listings, bookings, and reviews here.</p>

        {/* New Attraction Content */}
        <div className="tourist-attraction">
          <h3>Captivate Your Guests!</h3>
          <p>
            Highlight the best of your homestay and its surroundings! From serene landscapes to thrilling adventures, inspire tourists to choose your stay.
          </p>
          <div className="attraction-highlights">
            <h4>Why Choose This Destination?</h4>
            <ul>
              <li>🌟 Breathtaking scenery and sunsets</li>
              <li>🌟 Exclusive access to cultural events</li>
              <li>🌟 Authentic local cuisine experiences</li>
              <li>🌟 Personalized guided tours</li>
            </ul>
          </div>
          <div className="guest-reviews">
            <h4>What Guests Are Saying</h4>
            <p>
              "A truly enriching experience! The host went above and beyond to make us feel at home."
              <br />- Happy Guest
            </p>
            <p>
              "We loved the personalized touches and the local insights. Can't wait to come back!"
              <br />- Returning Visitor
            </p>
          </div>
          <div className="cta-section">
            <button className="upgrade-button">Promote Your Homestay</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostDashboard;