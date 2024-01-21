import React, { useState, useEffect} from 'react';


function PatientUpdates() {
  const [patientId, setPatientId] = useState('65ac545aa8fd58d8744467e5');
  const [patientDetails, setPatientDetails] = useState(null);
  const [updates, setUpdates] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAndDisplayPatient();
  }, []); // Fetch data on component mount

  const fetchAndDisplayPatient = async () => {
    try {
      // Fetch patient details
      const patientResponse = await fetch(`http://localhost:8080/patients/${patientId}`);
      if (!patientResponse.ok) {
        throw new Error('Error fetching patient');
      }
      const patient = await patientResponse.json();
      setPatientDetails(patient);

      // Fetch patient updates
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
  };

  return (
      <div>
        <h1>Fetch Patient Information and Updates</h1>

        <div>
          <label htmlFor="patientId">Patient ID:</label>
          <input
              type="text"
              id="patientId"
              placeholder="Enter Patient ID"
              value={patientId}
              onChange={(e) => setPatientId(e.target.value)}
          />
          <button onClick={fetchAndDisplayPatient}>Fetch Patient</button>
        </div>

        {error && <div>Error: {error}</div>}

        {patientDetails && (
            <div>
              <h3>Patient Details:</h3>
              <p>ID: {patientDetails._id}</p>
              <p>Name: {patientDetails.name}</p>
            </div>
        )}

        {updates && (
            <div>
              <h3>Patient Updates:</h3>
              {updates.length === 0 ? (
                  <p>No updates available for the patient</p>
              ) : (
                  updates.map((update, index) => (
                      <p key={index}>Update: {update.description}</p>
                  ))
              )}
            </div>
        )}
      </div>
  );
}

export default PatientUpdates;

