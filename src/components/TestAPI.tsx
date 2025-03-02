import { useState } from 'react';

const TestAPI = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      // Use POST and send the message in the body as JSON
      const res = await fetch('http://localhost:8000/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',  // Ensure that the backend knows it's JSON
        },
        body: JSON.stringify({ message: message }),  // Send the message in the body
      });
  
      if (!res.ok) {
        throw new Error('Failed to get response');
      }
  
      const data = await res.json();
      setResponse(data);  // Handle the response
      console.log('Response:', data);
    } catch (error) {
      console.error(error);
      setResponse({ error: 'Error: Unable to get a response.' });
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="message">Message:</label>
        <input
          type="text"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>

      {response && (
        <div>
          {response.error ? (
            <p>{response.error}</p>
          ) : (
            <p>Response: {response.status}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default TestAPI;
