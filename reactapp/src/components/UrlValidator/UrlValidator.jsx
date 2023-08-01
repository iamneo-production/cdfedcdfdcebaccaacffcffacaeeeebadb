import React, { useState } from 'react';

const UrlValidator = () => {
  const [domain, setDomain] = useState('');
  const [path, setPath] = useState('');
  const [method, setMethod] = useState('GET');
  const [body, setBody] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let url = domain.trim();

    // Append the path to the URL if provided
    if (path.trim() !== '') {
      url += '/' + path.trim().replace(/\s+/g, '/');
    }

    // Check if the body is empty for POST and PUT methods
    if ((method === 'POST' || method === 'PUT') && body.trim() === '') {
      setMessage('Error in the Body');
    } else {
      setMessage('Constructed URL: ' + url);
    }
  };

  return (
    <form data-testid="tags" onSubmit={handleSubmit}>
      <div>
        <label>Domain URL:</label>
        <input
          data-testid="domain"
          type="text"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          placeholder="Enter Domain URL"
          required
        />
      </div>

      <div>
        <label>Path:</label>
        <input
          data-testid="path"
          type="text"
          value={path}
          onChange={(e) => setPath(e.target.value)}
          placeholder="Enter Subsequent Paths (e.g., search all)"
        />
      </div>

      <div>
        <label>Method:</label>
        <select
          data-testid="method"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
      </div>

      {(method === 'POST' || method === 'PUT') && (
        <div>
          <label>Body:</label>
          <textarea
            data-testid="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Enter Body"
          />
        </div>
      )}

      <button type="submit">Submit</button>
      <div data-testid="message">{message}</div>
    </form>
  );
};

export default UrlValidator;
