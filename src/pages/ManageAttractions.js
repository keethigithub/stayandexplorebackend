import React, { useState } from 'react';

const ManageAttractions = () => {
  // Define state for each input
  const [nameInput, setNameInput] = useState('');
  const [distanceInput, setDistanceInput] = useState('');
  const [cityInput, setCityInput] = useState('');
  const [imageUrlInput, setImageUrlInput] = useState('');

  const handleAddAttraction = async (event) => {
    event.preventDefault(); // Prevent page reload on form submission
  
    const attraction = {
      name: nameInput,
      distance: distanceInput,
      city: cityInput,
      imageUrl: imageUrlInput,
    };
  
    try {
      const response = await fetch('http://localhost:8080/api/attractions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(attraction),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to add attraction: ${errorText}`);
      }
  
      const newAttraction = await response.json();
      console.log('Attraction added:', newAttraction);
    } catch (error) {
      console.error('Error adding attraction:', error);
      alert(`Error: ${error.message}`); // Optional: Display error message to user
    }
  };
  

  return (
    <div>
      <h2>Add New Attraction</h2>
      <form onSubmit={handleAddAttraction}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Distance: </label>
          <input
            type="text"
            value={distanceInput}
            onChange={(e) => setDistanceInput(e.target.value)}
            required
          />
        </div>
        <div>
          <label>City: </label>
          <input
            type="text"
            value={cityInput}
            onChange={(e) => setCityInput(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Image URL: </label>
          <input
            type="text"
            value={imageUrlInput}
            onChange={(e) => setImageUrlInput(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Attraction</button>
      </form>
    </div>
  );
};

export default ManageAttractions;
