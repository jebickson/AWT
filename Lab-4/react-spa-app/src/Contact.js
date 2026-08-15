import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
  };

  return (
    <div className="page">
      <h1>📧 Contact Us</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <button type="submit">📤 Submit</button>
        </form>
      ) : (
        <div>
          <h3>✅ Thank you, <strong>{name}</strong>! We'll get back to you soon.</h3>
          <button onClick={handleReset} style={{ background: '#6b7280' }}>
            ↩️ Go Back
          </button>
        </div>
      )}
    </div>
  );
}

export default Contact;