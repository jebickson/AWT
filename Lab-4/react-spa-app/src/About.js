import React from 'react';

function About() {
  return (
    <div className="page">
      <h1>📖 About This Application</h1>
      <p>
        This SPA demonstrates client-side routing using <strong>React Router</strong>.
        It loads pages dynamically without reloading the browser.
      </p>
      <div style={{ textAlign: 'left', maxWidth: '600px', margin: '20px auto' }}>
        <h3>✨ Features:</h3>
        <ul>
          <li>✅ Client-side routing with React Router v6</li>
          <li>✅ No page reloads during navigation</li>
          <li>✅ State management with <code>useState</code> hook</li>
          <li>✅ Responsive design with CSS</li>
          <li>✅ Interactive counter on Home page</li>
          <li>✅ Contact form with dynamic feedback</li>
        </ul>
      </div>
    </div>
  );
}

export default About;