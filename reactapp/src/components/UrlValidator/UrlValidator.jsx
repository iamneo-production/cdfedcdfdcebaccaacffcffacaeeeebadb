import React, { useState } from 'react';

const UrlValidator = () => {
  const [domain, setDomain] = useState('');
  const [path, setPath] = useState('');
  const [method, setMethod] = useState('GET');
  const [body, setBody] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    let constructedURL = `${domain}${path ? '/' + path.split(' ').join('/') : ''}`;
    
    if (['POST', 'PUT'].includes(method) && body === '') {
      setMessage('Error in the Body');
    } else {
      setMessage(`Constructed URL: ${constructedURL}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="domain">Domain URL:</label>
          <input
            type="text"
            id="domain"
            data-testid="domain-input"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="path">Path:</label>
          <input
            type="text"
            id="path"
            data-testid="path-input"
            value={path}
            onChange={(e) => setPath(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="method">Method:</label>
          <select
            id="method"
            data-testid="method-select"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
          >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>
        </div>
        {(method === 'GET' || method === 'POST' || method === 'PUT') && (
          <div>
            <label htmlFor="body">Body:</label>
            <textarea
              id="body"
              data-testid="body-textarea"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
        )}
        <button type="submit" data-testid="submit-button">Submit</button>
      </form>
      <div data-testid="message">{message}</div>
    </div>
  );
};

export default UrlValidator;
