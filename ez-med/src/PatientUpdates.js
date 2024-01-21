import React, { useState, useEffect, useCallback } from 'react';
import './PatientUpdates.css';

function PatientUpdates() {
  const [patientId, setPatientId] = useState('65ac545aa8fd58d8744467e5');
  const [patientDetails, setPatientDetails] = useState(null);
  const [updates, setUpdates] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAndDisplayPatient = useCallback(async () => {
    setIsLoading(true);
    try {
      const patientResponse = await fetch(`http://localhost:8080/patients/${patientId}`);
      if (!patientResponse.ok) {
        throw new Error('Error fetching patient');
      }
      const patient = await patientResponse.json();
      setPatientDetails(patient);

      const updatesResponse = await fetch(`http://localhost:8080/updates/${patientId}`);
      if (!updatesResponse.ok) {
        throw new Error('Error fetching updates');
      }
      const patientUpdates = await updatesResponse.json();
      setUpdates(patientUpdates);
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [patientId]);

  useEffect(() => {
    fetchAndDisplayPatient();
  }, [fetchAndDisplayPatient]);

  return (
    <div className="patient-updates-container">
      {isLoading && <div className="loading">Loading...</div>}
      {error && <div className="error-message">Error: {error}</div>}

      {patientDetails && (
        <div className="patient-updates-header">
          <h1>Updates for {patientDetails.name}</h1>
        </div>
      )}

      {updates && (
        <div className="update-section">
          {updates.length === 0 ? (
            <h2>No updates available for the patient</h2>
          ) : (
            <ul>
              {updates.map((update, index) => (
                <li key={index}><strong>{update.date}:</strong> {update.update}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default PatientUpdates;

