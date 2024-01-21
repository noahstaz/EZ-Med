import React from 'react';
import './Resources.css'; // Make sure to create a Resources.css file for styling

function Resources() {
  return (
    <div className="resources">
      <header className="resources-header">
        <button className="back-button">&larr;</button>
        <h1>User Resources</h1>
      </header>
      <section className="resource-section">
        <h2>Jacob is being treated by:</h2>
        <ul>
          <li>
            Dr. Old Person
            <ul>
              <li>Contact: 123 456 7890</li>
              <li>Email: old@person.com</li>
            </ul>
          </li>
          <li>
            Nurse
            <ul>
              <li>Contact: 345 678 9012</li>
              <li>Email: nurse@hospital.ca</li>
            </ul>
          </li>
        </ul>
      </section>
      <section className="resource-section">
        <h2>Here are some social resources you may need...</h2>
        <ul>
          <li>BetterHelp</li>
        </ul>
      </section>
      <section className="resource-section">
        <h2>Here are some financial resources you may need...</h2>
        <ul>
          <li>Bank</li>
        </ul>
      </section>
    </div>
  );
}

export default Resources;
