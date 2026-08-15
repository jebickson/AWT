import React, { useState } from 'react';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="page">
      <h1>🏠 Welcome to the React SPA!</h1>
      <p>This is the Home Page of a single-page application.</p>
      <hr />
      <p><strong>Dynamic Counter Example:</strong></p>
      <h3 style={{ fontSize: '3rem', margin: '10px 0' }}>{count}</h3>
      <button onClick={() => setCount(count + 1)}>➕ Increase</button>
      <button onClick={() => setCount(count - 1)}>➖ Decrease</button>
      <button onClick={() => setCount(0)} style={{ background: '#6b7280' }}>
        🔄 Reset
      </button>
    </div>
  );
}

export default Home;