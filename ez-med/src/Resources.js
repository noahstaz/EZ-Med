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
        <ResourceItem title="Dr. Old Person" contact="123 456 7890" email="old@person.com" />
        <ResourceItem title="Nurse" contact="345 678 9012" email="nurse@hospital.ca" />
      </ResourceSection>
      <ResourceSection heading="Here are some social resources you may need...">
        {/* Add ResourceItem components here */}
      </ResourceSection>
      <ResourceSection heading="Here are some financial resources you may need...">
        {/* Add ResourceItem components here */}
      </ResourceSection>
    </div>
  );
}

export default Resources;
