import React, { useState } from 'react';

const ExploreAttraction = () => {
  const [searchCity, setSearchCity] = useState('');
  const [filteredAttractions, setFilteredAttractions] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/attractions?city=${searchCity}`);
      if (response.ok) {
        const data = await response.json();
        setFilteredAttractions(data);
      } else {
        alert('Error fetching attractions');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Explore Attractions</h1>
      <input
        type="text"
        placeholder="Search by City"
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <button onClick={handleSearch}>Search</button>

      <div style={{ marginTop: '20px' }}>
        {filteredAttractions.length === 0 ? (
          <p>No attractions found.</p>
        ) : (
          <ul>
            {filteredAttractions.map((attraction) => (
              <li key={attraction.id} style={{ marginBottom: '15px' }}>
                <h4>{attraction.name}</h4>
                <p>Distance: {attraction.distance}</p>
                <img
                  src={attraction.imageUrl}
                  alt={attraction.name}
                  style={{ width: '200px', height: '150px', objectFit: 'cover' }}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ExploreAttraction;
