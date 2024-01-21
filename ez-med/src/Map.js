import React from 'react';
import './Map.css'; // Assuming Map.css is in the same folder as your Map.js

function Map() {
  return (
    <div className="map-container">
      <div className="map-header">
        <button className="back-button">&larr;</button>
        <h1>User Map</h1>
      </div>
      <div className="map-buttons">
        <button className="map-button">Display Map to Patient</button>
        <button className="map-button">Display Map to Parking</button>
      </div>
      <div className="map-placeholder">
        {/* Placeholder for map API integration */}
      </div>
    </div>
  );
}

export default Map;
