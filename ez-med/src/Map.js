import React, { useState } from 'react';
import './Map.css'; // Assuming Map.css is in the same folder as your Map.js

function Map() {
  // URLs for different maps
  const patientMapUrl = "https://maker.mappedin.com/map/65ac79afca641a9a1399dc58/directions?map=Level%202&location=Patient%20Room";
  const parkingMapUrl = "https://maker.mappedin.com/map/65ac79afca641a9a1399dc58/directions?embedded=true%22%3E&map=Level%201&location=Underground%20Parking%20Entrance&departure=Level%201+49.28084726449125+-123.12936399813589";

  // State to manage the current map URL
  const [currentMapUrl, setCurrentMapUrl] = useState(patientMapUrl);

  // Function to switch to patient map
  const showPatientMap = () => {
    setCurrentMapUrl(patientMapUrl);
  };

  // Function to switch to parking map
  const showParkingMap = () => {
    setCurrentMapUrl(parkingMapUrl);
  };

  return (
    <div className="map-container">
      <div className="map-header">
        <button className="back-button">&larr;</button>
        <h1>User Map</h1>
      </div>
      <div className="map-buttons">
        <button className="map-button" onClick={showPatientMap}>Display Map to Patient</button>
        <button className="map-button" onClick={showParkingMap}>Display Map to Parking</button>
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
          src={currentMapUrl}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Map;
