import React, { useEffect, useState } from 'react';

const ManageHomestays = () => {
  const [bookings, setBookings] = useState([]);
  const API_URL = 'http://localhost:8081/api/bookings'; // Correct API endpoint

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log("API Response:", data); // Debug the response format
        setBookings(Array.isArray(data) ? data : data.bookings || []);
      } catch (error) {
        console.error('Error fetching bookings:', error);
        setBookings([]); // Fallback to empty array on error
      }
    };

    fetchBookings();
  }, []);

  return (
    <div>
      <h1>Manage Homestays</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Check-In Date</th>
            <th>Check-Out Date</th>
            <th>Room Type</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(bookings) && bookings.length > 0 ? (
            bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.name}</td>
                <td>{booking.phoneNumber}</td>
                <td>{booking.email}</td>
                <td>{new Date(booking.checkInDate).toLocaleDateString()}</td>
                <td>{new Date(booking.checkOutDate).toLocaleDateString()}</td>
                <td>{booking.roomType}</td> {/* Display roomType */}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No bookings available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageHomestays;
