// src/pages/AdminDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar1.css'; 

function AdminDashboard() {
  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <h2>Admin Dashboard</h2>
        <ul>
          {/* Use Link from react-router-dom to navigate */}
          <li><Link to="/manage-homestays">Manage Homestays</Link></li>
          
          <li><Link to="/logout">Logout</Link></li>
        </ul>
      </nav>
      <div className="dashboard-content">
        <h3>Welcome, Admin!</h3>
        <p>Use the menu to manage platform content and users.</p>
      </div>
    </div>
  );
}

export default AdminDashboard;
