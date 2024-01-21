// Resources.js
import React from 'react';
import './Resources.css';

const ResourceItem = ({ title, contact, email }) => (
  <li className="resource-item">
    {title}
    <ul>
      {contact && <li>Contact: {contact}</li>}
      {email && <li>Email: {email}</li>}
    </ul>
  </li>
);

const ResourceSection = ({ heading, children }) => (
  <section className="resource-section">
    <h2>{heading}</h2>
    <ul>{children}</ul>
  </section>
);

function Resources() {
  return (
    <div className="resources-container">
      <header className="resources-header">
        <button className="back-button">&larr;</button>
        <h1>User Resources</h1>
      </header>
      <ResourceSection heading="Jacob is being treated by:">
        <ResourceItem title="Dr. Aaron Deo" contact="467 566-3334" email="doubleAron@gmail.com" />
        <ResourceItem title="Nurse" contact="345 678 9012" email="Vedu@vancouverHospital.ca" />
      </ResourceSection>
      <ResourceSection heading="Here are some social resources to check out">
      <ResourceItem title="Mental Health Services" contact="800 234 5678" link="https://www.mentalhealth.org" />
      </ResourceSection>
      <ResourceSection heading="Here are some financial resources to check out">
      <ResourceItem title="Emergency Financial Aid" contact="280 684 4995" link="https://www.emergencyaid.org" />
      </ResourceSection>
    </div>
  );
}

export default Resources;
