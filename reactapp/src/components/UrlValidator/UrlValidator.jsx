// src/components/UrlValidator/UrlValidator.jsx
import React, { useState } from 'react';

const UrlValidator = () => {
  const [domain, setDomain] = useState('');
  const [path, setPath] = useState('');
  const [method, setMethod] = useState('GET');
  const [body, setBody] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    let constructedPath = '';
    if (path.trim() !== '') {
      constructedPath = '/' + path.trim().replace(/\s+/g, '/');
    }

    if (method === 'DELETE') {
      // No need to validate body for DELETE method
      setMessage('URL Constructed: ' + domain + constructedPath);
    } else {
      if (method === 'GET' || method === 'POST' || method === 'PUT') {
        if (body.trim() === '') {
          setMessage('Error in the Body');
        } else {
          setMessage('URL Constructed: ' + domain + constructedPath);
        }
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} data-testid="tags">
        <label>
          Domain:
          <input
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            data-testid="domain"
          />
        </label>
        <br />
        <label>
          Path:
          <input
            type="text"
            value={path}
            onChange={(e) => setPath(e.target.value)}
            data-testid="path"
          />
        </label>
        <br />
        <label>
          Method:
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            data-testid="method"
          >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>
        </label>
        <br />
        {(method === 'GET' || method === 'POST' || method === 'PUT') && (
          <label>
            Body:
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              data-testid="body"
            />
          </label>
        )}
        <br />
        <button type="submit" data-testid="submit">
          Submit
        </button>
      </form>
      <div data-testid="message">{message}</div>
    </div>
  );
};

export default UrlValidator;
