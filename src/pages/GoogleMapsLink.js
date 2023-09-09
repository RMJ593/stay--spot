import React from 'react';

const GoogleMapsLink = ({ latitude, longitude, label }) => {
  const mapLink = `https://www.google.com/maps?q=${latitude},${longitude}`;

  return (
    <div>
      <p>{label}</p>
      <a href={mapLink} target="_blank" rel="noopener noreferrer" style={{height:'1 rem'}}>
      View on Map-📌
      </a>
    </div>
  );
};

export default GoogleMapsLink;
