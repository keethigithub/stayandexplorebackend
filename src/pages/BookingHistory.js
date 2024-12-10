// src/pages/BookingHistory.js
import React, { useState, useEffect } from 'react';
import '../Style/BookingHistory.css'; // Make sure you create this file for CSS

const BookingHistory = () => {
  // Sample data for the booking history
  const [bookings, setBookings] = useState([
    { homestayName: 'Beachfront Cottage', checkInDate: '2024-11-01', checkOutDate: '2024-11-07', status: 'Completed' },
    { homestayName: 'Mountain Lodge', checkInDate: '2024-11-10', checkOutDate: '2024-11-15', status: 'Pending' }
  ]);

  // Effect to simulate fetching booking data
  useEffect(() => {
    // Fetch data if necessary
    // Simulating static data usage for now
  }, []);

  return (
    <div className="booking-history-container">
      <h2>Booking History</h2>
      <table className="booking-history-table">
        <thead>
          <tr>
            <th>Homestay Name</th>
            <th>Check-In Date</th>
            <th>Check-Out Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index} className="booking-row">
              <td>{booking.homestayName}</td>
              <td>{booking.checkInDate}</td>
              <td>{booking.checkOutDate}</td>
              <td className={`status ${booking.status.toLowerCase()}`}>
                {booking.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingHistory;
