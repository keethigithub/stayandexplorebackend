import React, { useState } from 'react';
import '../Style/selectguide.css';

const guides = [
  {
    id: 1,
    name: 'Rahul Sharma',
    phone: '+91 9876543210',
    languages: ['Hindi', 'English', 'Punjabi'],
    city: 'Delhi',
  },
  {
    id: 2,
    name: 'Priya Patel',
    phone: '+91 8765432109',
    languages: ['Gujarati', 'Hindi', 'English'],
    city: 'Mumbai',
  },
  {
    id: 3,
    name: 'Amit Singh',
    phone: '+91 7654321098',
    languages: ['Bengali', 'Hindi', 'English'],
    city: 'Kolkata',
  },
  {
    id: 4,
    name: 'Neha Gupta',
    phone: '+91 6543210987',
    languages: ['Tamil', 'English', 'Hindi'],
    city: 'Chennai',
  },
  {
    id: 5,
    name: 'Vikram Reddy',
    phone: '+91 5432109876',
    languages: ['Telugu', 'English', 'Hindi'],
    city: 'Hyderabad',
  },
  {
    id: 6,
    name: 'Anjali Mehta',
    phone: '+91 4321098765',
    languages: ['Marathi', 'English', 'Hindi'],
    city: 'Pune',
  },
  {
    id: 7,
    name: 'Ramesh Varma',
    phone: '+91 3210987654',
    languages: ['Kannada', 'English', 'Hindi'],
    city: 'Bangalore',
  },
  {
    id: 8,
    name: 'Suresh Kumar',
    phone: '+91 2109876543',
    languages: ['Malayalam', 'English', 'Hindi'],
    city: 'Kochi',
  },
  {
    id: 9,
    name: 'Deepak Das',
    phone: '+91 1098765432',
    languages: ['Assamese', 'Bengali', 'English'],
    city: 'Guwahati',
  },
  {
    id: 10,
    name: 'Nisha Roy',
    phone: '+91 9087654321',
    languages: ['English', 'Hindi', 'Nepali'],
    city: 'Darjeeling',
  },
  {
    id: 11,
    name: 'Karan Kapoor',
    phone: '+91 8765123456',
    languages: ['Hindi', 'English', 'Urdu'],
    city: 'Lucknow',
  },
  {
    id: 12,
    name: 'Meera Nair',
    phone: '+91 7654021345',
    languages: ['Malayalam', 'English', 'Tamil'],
    city: 'Thiruvananthapuram',
  },
  {
    id: 13,
    name: 'Harsha Pandey',
    phone: '+91 6541239870',
    languages: ['Hindi', 'English', 'Gujarati'],
    city: 'Ahmedabad',
  },
  {
    id: 14,
    name: 'Pooja Jain',
    phone: '+91 5432198765',
    languages: ['Rajasthani', 'Hindi', 'English'],
    city: 'Jaipur',
  },
  {
    id: 15,
    name: 'Manoj Joshi',
    phone: '+91 4321987654',
    languages: ['Hindi', 'Garhwali', 'English'],
    city: 'Dehradun',
  },
  {
    id: 16,
    name: 'Sneha Desai',
    phone: '+91 3219876543',
    languages: ['English', 'Hindi', 'Konkani'],
    city: 'Goa',
  },
  {
    id: 17,
    name: 'Akash Yadav',
    phone: '+91 2109876543',
    languages: ['Hindi', 'Bhojpuri', 'English'],
    city: 'Patna',
  },
  {
    id: 18,
    name: 'Ritu Sinha',
    phone: '+91 1098765432',
    languages: ['Hindi', 'Maithili', 'English'],
    city: 'Ranchi',
  },
  {
    id: 19,
    name: 'Kavita Arora',
    phone: '+91 9087654312',
    languages: ['Hindi', 'English', 'Punjabi'],
    city: 'Amritsar',
  },
  {
    id: 20,
    name: 'Vishal Bhatt',
    phone: '+91 9876054321',
    languages: ['Hindi', 'Gujarati', 'English'],
    city: 'Surat',
  },
];


function SelectGuide() {
  const [selectedGuide, setSelectedGuide] = useState(null);

  const handleSelectGuide = (guide) => {
    setSelectedGuide(guide);
  };

  return (
    <div className="guide-container">
      <h1 className="title">Select a Guide</h1>
      <div className="guides-grid">
        {guides.map((guide) => (
          <div
            key={guide.id}
            className={`guide-card ${selectedGuide?.id === guide.id ? 'selected' : ''}`}
            onClick={() => handleSelectGuide(guide)}
          >
            <h2 className="guide-name">{guide.name}</h2>
            <p><strong>Phone:</strong> {guide.phone}</p>
            <p><strong>Languages:</strong> {guide.languages.join(', ')}</p>
            <p><strong>City:</strong> {guide.city}</p>
          </div>
        ))}
      </div>
      {selectedGuide && (
        <div className="selected-guide-details">
          <h2>Selected Guide</h2>
          <p><strong>Name:</strong> {selectedGuide.name}</p>
          <p><strong>Phone:</strong> {selectedGuide.phone}</p>
          <p><strong>Languages:</strong> {selectedGuide.languages.join(', ')}</p>
          <p><strong>City:</strong> {selectedGuide.city}</p>
        </div>
      )}
    </div>
  );
}

export default SelectGuide;
