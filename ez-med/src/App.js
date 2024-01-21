import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import logo from './logo.svg';
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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Edit <code>src/App.js</code> and save to reload.</p>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/map">Map</Link></li>
              <li><Link to="/patient-updates">Patient Updates</Link></li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/resources" component={Resources} />
          <Route path="/map" component={Map} />
          <Route path="/patient-updates" component={PatientUpdates} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;



