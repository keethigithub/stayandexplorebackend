// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';
import GuideDashboard from './pages/GuideDashboard';
import TouristDashboard from './pages/TouristDashboard';
import HostDashboard from './pages/HostDashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import ManageHomestays from './pages/ManageHomestays';
import ManageFeedback from './pages/ManageFeedback';
import ManageAttractions from './pages/ManageAttractions';
import Logout from './pages/Logout';
import Reviews from './pages/ManageReviews';
import BookingHistory from './pages/BookingHistory';
import Homestays from './pages/Homestays';
import ExploreAttractions from './pages/ExploreAttractions';
import Booking from './pages/Booking';
import TourismInsights from './pages/TourismInsights';
import Feedback from './pages/Feedback';
import HostInsights from './pages/HostInsights';
import Selectguide from './pages/Selectguide';
import About from './pages/About'; 
import Payment from './pages/Payment'; // Import the About component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/guide" element={<GuideDashboard />} />
        <Route path="/tourist" element={<TouristDashboard />} />
        <Route path="/hostdashboard" element={<HostDashboard />} />
        <Route path="/manage-homestays" element={<ManageHomestays />} />
        <Route path="/manage-feedback" element={<ManageFeedback />} />
        <Route path="/manage-attractions" element={<ManageAttractions />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/booking-history" element={<BookingHistory />} />
        <Route path="/homestays" element={<Homestays />} />
        <Route path="/explore-attractions" element={<ExploreAttractions />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/guide/insights" element={<TourismInsights />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/Hostinsights" element={<HostInsights />} />
        <Route path="/guide/selectguide" element={<Selectguide />} />
        <Route path="/bookings" element={<About />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
