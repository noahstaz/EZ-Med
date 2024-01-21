import React, { useState, useEffect, useCallback } from 'react';
import './PatientUpdates.css';
function PatientUpdates() {
  const [patientId, setPatientId] = useState('65ac545aa8fd58d8744467e5');
  const [patientDetails, setPatientDetails] = useState(null);
  const [updates, setUpdates] = useState(null);
  const [error, setError] = useState(null);

  // Define the fetchAndDisplayPatient function using useCallback
  const fetchAndDisplayPatient = useCallback(async () => {
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

      setError(null);
    } catch (error) {
      console.error(error.message);
      setError('Error fetching data');
      setPatientDetails(null);
      setUpdates(null);
    }
  }, [patientId]);

  // Fetch data on component mount or when patientId changes
  useEffect(() => {
    fetchAndDisplayPatient();
  }, [fetchAndDisplayPatient]);
    return (
        <div>
          {error && <div>Error: {error}</div>}

          {patientDetails && (
              <div className={"patient-updates-header"}>
                <h1>Here are the updates for {patientDetails.name}</h1>
              </div>
          )}

          {updates && (
              <div >
                {updates.length === 0 ? (
                    <h2>No updates available for the patient</h2>
                ) : (
                    updates.map((update, index) => (
                        <h2 key={index}>{update.date}: {update.update}</h2>
                    ))
                )}
              </div>
          )}
        </div>
    );
}
export default PatientUpdates;

