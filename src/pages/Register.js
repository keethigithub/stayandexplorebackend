// src/pages/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import './Register.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  // Backend API URL (replace with your actual backend URL)
  const REGISTER_API_URL = 'http://localhost:8081/Register';

;

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic validation
    if (!name || !email || !password || !role) {
      alert('All fields are required.');
      return;
    }

    // Create an object with user data
    const userData = {
      name,
      email,
      password,
      selectrole: role // Convert role to integer
    };
    

    try {
      // Send a POST request to the backend
      axios.post(REGISTER_API_URL, userData).then((res)=>{
         // Check the response from the server
      if (res.data === "Yes") {
        alert('Registration successful! Please log in.');
        navigate('/login');
      } else {
        alert('Registration failed. Please try again.');
      }
      })

      
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Registration failed. Please check your details or try again later.');
    }
  };

  return (
    <div className="register-container">
      <header>
        <h1>Register for Travel Homestays</h1>
      </header>

      <main>
        <form id="register-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <select
  name="selectrole"
  value={role}
  onChange={(e) => setRole(e.target.value)}
  required
>
  <option value="">Select Role</option>
  <option value="1">Admin</option>
  <option value="2">Host</option>
  <option value="3">Tourist</option>
  <option value="4">Guide</option>
</select>

          <button type="submit">Register</button>
          <p>Already have an account? <a href="/login">Login here</a></p>
        </form>
      </main>

      <footer>
        <p>&copy; 2024 Travel Homestays</p>
      </footer>
    </div>
  );
}

export default Register;