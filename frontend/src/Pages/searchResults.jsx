import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const query = new URLSearchParams(useLocation().search).get('query');

  useEffect(() => {
    if (query) {
      axios
        .get(`http://localhost:5000/api/profile/search?query=${encodeURIComponent(query)}`)
        .then(res => {
          setResults(res.data.data || []);
        })
        .catch(err => {
          console.error('Search error:', err);
        })
        .finally(() => setLoading(false));
    }
  }, [query]);

  return (
    <div className='max-w-4xl mx-auto p-6 mt-10'>
      <h2 className='text-2xl font-bold mb-4'>Search Results for "{query}"</h2>

      {loading ? (
        <p>Loading...</p>
      ) : results.length === 0 ? (
        <p>No matching profiles found.</p>
      ) : (
        <ul className="space-y-4">
          {results.map((user, idx) => (
            <li key={idx} className="p-4 border rounded shadow">
              <h3 className="text-xl font-semibold">{user.fullName}</h3>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Interests:</strong> {user.interests.join(', ')}</p>
              {user.profilePhoto && (
                <img
                  src={`http://localhost:5000/${user.profilePhoto}`}
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover mt-2"
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResults;
