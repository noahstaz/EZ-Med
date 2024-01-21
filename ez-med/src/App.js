import React, { useState, useEffect, useCallback  } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import Resources from './Resources'; // Import your Resources component
import Map from './Map'; // Import your Map component
import PatientUpdates from './PatientUpdates';
import Login from "./Login";

const medications = ['Medication 1', 'Medication 2']; // Replace with your actual medication data

function GreetingCard({ userName }) {
  return (
    <div className="card">
      <h2>Hi {userName},</h2>
    </div>
  );
}

function UpdatesCard() {
  return (
    <div className="card">
      <p>Here are the updates for Jacob...</p>
    </div>
  );
}

function SleepStatusCard() {
  return (
    <div className="card">
      <p>They are currently sleeping.</p>
    </div>
  );
}

function BreakfastCard() {
  return (
    <div className="card">
      <p>They had breakfast at 9:00 AM.</p>
    </div>
  );
}

function MedicationsCard({ medications }) {
  return (
    <div className="card">
      <p>These are the medications they are on:</p>
      <ul>
        {medications.map((medication, index) => (
          <li key={index}>{medication}</li>
        ))}
      </ul>
    </div>
  );
}

function HomePage({ userName }) {
  return (
    <div className="home-page">
      <div className="card-grid">
        <GreetingCard userName={userName} />
        {/* ...other cards */}
        <MedicationsCard medications={medications} />
      </div>
    </div>
  );
}

function App() {
  const [userId] = useState('65acd66506abb33dfad0dab5');
  const [userName, setUserName] = useState(null);
  const [error, setError] = useState(null);

  const fetchAndDisplayUser = async () => {
    try {
      const userResponse = await fetch(`http://localhost:8080/users/${userId}`);
      if (!userResponse.ok) {
        throw new Error('Error fetching user');
      }
      const userData = await userResponse.json();
      setUserName(userData.name);
    } catch (error) {
      console.error(error.message);
      setError('Error fetching data');
    }
  };

  useEffect(() => {
    fetchAndDisplayUser();
  }, []); // Empty dependency array to run once on mount

  return (
    <Router>
      <div>
        <nav className="navbar background">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/resources">Resources</Link>
            </li>
            <li className="nav-item">
              <Link to="/map">Map</Link>
            </li>
            <li className="nav-item">
              <Link to="/patient-updates">Patient Updates</Link>
            </li>
            <li className="nav-item">
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/resources">
            <Resources />
          </Route>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/patient-updates">
            <PatientUpdates />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <HomePage userName={userName} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
