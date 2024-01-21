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
        <iframe
          title="Mappedin Map"
          name="Mappedin Map"
          scrolling="no"
          width="100%"
          height="650"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://maker.mappedin.com/map/65ac79afca641a9a1399dc58/directions?map=Level%202&location=Patient%20Room"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Map;

