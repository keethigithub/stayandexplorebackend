import React from 'react';
import './style/myhomestays.css'; // Assuming you have styles for this component

const MyHomestays = () => {
  const homestays = [
    {
      id: 1,
      name: 'Cozy Cottage',
      price: 40,
      image: 'homestay1.jpg',
    },
    {
      id: 2,
      name: 'Mountain Retreat',
      price: 50,
      image: 'homestay2.jpg',
    },
    {
      id: 3,
      name: 'Lakeview Bungalow',
      price: 60,
      image: 'homestay3.jpg',
    },
  ];

  return (
    <div>
      <header style={headerStyle}>
        <h1>Available Homestays</h1>
      </header>
      <div style={containerStyle}>
        <div style={homestayListStyle}>
          {homestays.map((homestay) => (
            <div key={homestay.id} style={homestayStyle}>
              <img
                src={homestay.image}
                alt={homestay.name}
                style={imageStyle}
              />
              <h3 style={titleStyle}>{homestay.name}</h3>
              <p>Price: ${homestay.price}/night</p>
              <a
                href={`booking.jsp?id=${homestay.id}&name=${encodeURIComponent(homestay.name)}`}
                style={linkStyle}
              >
                Book again
              </a>
            </div>
          ))}
        </div>
      </div>
      <div style={buttonContainerStyle}>
        <button onClick={() => window.location.href = 'hostdashbord.jsp'}>
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

