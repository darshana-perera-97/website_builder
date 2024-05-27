import React, { useState } from 'react';

export default function Domain() {
  const [text, setText] = useState('');
  const [response, setResponse] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://website-builder-backend.onrender.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      const data = await res.json();
      setResponse(data.success);
      setMessage(data.message || '');
    } catch (error) {
      console.error('Error:', error);
      setResponse(false);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <h1>Select a Domain</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text"
        />
        <button type="submit">Submit</button>
      </form>
      {response !== null && (
        <div>
          Response: {response.toString()}
          {message && <p>{message}</p>}
        </div>
      )}
    </div>
  );
}
