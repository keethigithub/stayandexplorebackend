// // src/pages/TouristDashboard.js
// import React from 'react';
// import './sidebar.css'; // Include your CSS file for styling

// const TouristDashboard = () => {
//   return (
//     <div className="dashboard-container">
//       <div className="sidebar">
//         <h2>Tourist Dashboard</h2>
//         <ul>
//           <li><a href="/homestays">Homestays</a></li>
//           <li><a href="/feedback">Feedback</a></li>
//           <li><a href="/explore-attractions">Explore Attractions</a></li>
//           <li><a href="/logout">Logout</a></li>
//         </ul>
//       </div>

//       <div className="main-content">
//         <h3>Welcome, Tourist!</h3>
//         <p>Search for homestays, view your bookings, and explore attractions here.</p>
//         <h2>Explore Homestays and Attractions!</h2>
//         <p>Use the navigation links to manage your bookings and explore more.</p>
//       </div>
//     </div>
//   );
// };

// export default TouristDashboard;
import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/TouristDashboard.css'; // CSS file for enhanced styling

const TouristDashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Tourist Dashboard</h2>
        <ul>
          
          <li><Link to="/homestays">Find Homestays</Link></li>
          <li><Link to="/feedback">Feedback</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
      </aside>
      <div className="dashboard-content">
        <h3>Welcome, Adventurer!</h3>
        <p>Your gateway to unforgettable experiences awaits. Start exploring now!</p>

        {/* New Tourist Attraction Content */}
        <div className="tourist-promo">
          <h3>Discover the World Like Never Before</h3>
          <p>
            Embark on a journey of wonder and excitement. From serene beaches to bustling cityscapes, we bring the world to your fingertips.
          </p>
          <div className="attraction-highlights">
            <h4>Why Choose Us?</h4>
            <ul>
              <li>🌍 Handpicked destinations for every travel enthusiast</li>
              <li>🌍 Exclusive deals on top-rated homestays and attractions</li>
              <li>🌍 Authentic local experiences curated just for you</li>
              <li>🌍 Trusted reviews to help you plan with confidence</li>
            </ul>
          </div>
          <div className="guest-testimonials">
            <h4>Hear From Our Travelers</h4>
            <p>
              "An experience of a lifetime! Every detail was perfect."
              <br />- Satisfied Traveler
            </p>
            <p>
              "The homestays were cozy, and the attractions were breathtaking. Highly recommend!"
              <br />- Enthusiastic Explorer
            </p>
          </div>
          <div className="cta-section">
            <button className="explore-button">Start Your Adventure</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristDashboard;
