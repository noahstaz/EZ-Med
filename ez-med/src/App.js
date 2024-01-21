import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import Resources from './Resources'; // Import your Resources component
import Map from './Map'; // Import your Map component
import PatientUpdates from './PatientUpdates'; // Import your PatientUpdates component

const medications = ['Medication 1', 'Medication 2']; // Replace with your actual medication data

function GreetingCard() {
  return (
    <div className="card">
      <h2>Hi Joe,</h2>
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

function HomePage() {
  return (
    <div className="home-page">
      <div className="card-grid">
        <GreetingCard />
        <UpdatesCard />
        <SleepStatusCard />
        <BreakfastCard />
        <MedicationsCard medications={medications} />
      </div>
    </div>
  );
}

function App() {
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
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}





export default App;
