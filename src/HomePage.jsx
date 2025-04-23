import React from "react";

export default function HomePage() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2 style={{ color: '#E30613', fontSize: '2rem' }}>
        New Website Coming Soon
      </h2>
      <p style={{ maxWidth: '600px', margin: '1rem auto', fontSize: '1.2rem' }}>
        We’re currently working on something amazing for Maintenance & Installation Services Ltd.
        Our new website will be live shortly. In the meantime, you can still reach us for fire and security services.
      </p>
      <button style={{
        backgroundColor: '#E30613',
        color: '#fff',
        padding: '0.75rem 1.5rem',
        border: 'none',
        borderRadius: '4px',
        marginTop: '1rem',
        cursor: 'pointer'
      }}>
        Contact Us
      </button>
    </div>
  );
}