import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import Resources from './Resources'; // Import your Resources component
import Map from './Map'; // Import your Map component
import PatientUpdates from './PatientUpdates'; // Import your PatientUpdates component

function HomePage() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the home page!</p>
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
