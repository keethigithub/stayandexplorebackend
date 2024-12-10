// src/pages/Logout.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Perform any logout logic here, e.g., clearing session storage or cookies
    // Redirect to login or home page
    navigate('/login'); // Adjust the path as necessary
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default Logout;
