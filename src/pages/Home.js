import React from 'react';
import './Home.css'; // Include CSS for styling

const Home = () => {
  return (
    <div className="home-container">
      <div className="header-container">
        <h1 className="home-heading">Stay & Explore</h1>
        <p className="home-paragraph">
          Discover beautiful places, connect with local guides, and make your journey unforgettable. Join us today to explore amazing destinations and find the perfect stay.
        </p>
      </div>
      <div className="button-container">
        <button className="home-button" onClick={() => window.location.href = '/login'}>
          Login
        </button>
        <button className="home-button" onClick={() => window.location.href = '/register'}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Home;