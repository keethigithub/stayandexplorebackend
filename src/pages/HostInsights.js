import React, { useState } from 'react';
import '../Style/HostInsights.css';

const HostInsights = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedHost, setSelectedHost] = useState(null);

  // List of hosts with details
  const allHosts = [
    {
      id: 1,
      name: 'John Doe',
      location: 'Paris, France',
      rating: 4.8,
      reviews: 120,
      activities: [
        { time: '10:00 AM', activity: 'Guided tour of the Eiffel Tower.' },
        { time: '2:00 PM', activity: 'Wine tasting at a local vineyard.' },
        { time: '7:00 PM', activity: 'Dinner with French cuisine at a local bistro.' },
      ],
     
    },
    {
      id: 2,
      name: 'Emily Smith',
      location: 'New York, USA',
      rating: 4.6,
      reviews: 85,
      activities: [
        { time: '9:00 AM', activity: 'Central Park morning walk.' },
        { time: '12:00 PM', activity: 'Lunch at Times Square.' },
        { time: '5:00 PM', activity: 'Evening tour of the Statue of Liberty.' },
      ],
    
    },
    {
      id: 3,
      name: 'Akira Tanaka',
      location: 'Tokyo, Japan',
      rating: 5.0,
      reviews: 200,
      activities: [
        { time: '10:00 AM', activity: 'Visit Senso-ji Temple.' },
        { time: '1:00 PM', activity: 'Explore Akihabara’s tech and anime shops.' },
        { time: '7:00 PM', activity: 'Dinner at a sushi bar.' },
      ],
   
    },
    {
      id: 4,
      name: 'Sophia Lee',
      location: 'Sydney, Australia',
      rating: 4.7,
      reviews: 90,
      activities: [
        { time: '9:00 AM', activity: 'Morning surf lesson at Bondi Beach.' },
        { time: '1:00 PM', activity: 'Lunch at Circular Quay.' },
        { time: '5:00 PM', activity: 'Harbor cruise to see the Sydney Opera House.' },
      ],

    },
  ];

  // Handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter hosts based on search query
  const filteredHosts = allHosts.filter((host) =>
    host.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle host selection
  const handleHostSelect = (host) => {
    setSelectedHost(host);
  };

  return (
    <div className="host-insights">
      <h1>Host Insights</h1>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a host..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {/* Selected Host Details */}
      {selectedHost && (
        <div className="host-details">
          <h2>Meet {selectedHost.name}</h2>
          <p>
            Location: {selectedHost.location} | Rating: {selectedHost.rating} ⭐ | {selectedHost.reviews} reviews
          </p>

          {/* Host's Activities */}
          <div className="host-activities">
            <h3>Activities Offered</h3>
            <ul>
              {selectedHost.activities.map((activity, index) => (
                <li key={index}>
                  <strong>{activity.time}</strong>: {activity.activity}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Hosts List */}
      <div className="hosts-list">
        <div className="hosts-grid">
          {filteredHosts.map((host) => (
            <div key={host.id} className="host-card" onClick={() => handleHostSelect(host)}>
              <img src={host.image} alt={host.name} className="host-image" />
              <h3>{host.name}</h3>
              <p>{host.location}</p>
              <p>⭐ {host.rating} ({host.reviews} reviews)</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HostInsights;