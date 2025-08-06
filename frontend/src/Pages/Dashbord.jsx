import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { auth } from './firebase';

const SimilarProfiles = () => {
  const [similarUsers, setSimilarUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUserEmail(user.email); // ✅ set email to state
    } else {
      setLoading(false);
      setError("No user is logged in");
      return;
    }
  }, []);

  useEffect(() => {
    if (!userEmail) return;

    const fetchSimilar = async () => {
      try {
        console.log('Fetching similar users for:', userEmail);
        const res = await axios.post('http://localhost:5000/api/profile/similar', { email: userEmail });
        console.log('Received response:', res.data);
        setSimilarUsers(res.data);
      } catch (err) {
        setError('Failed to load similar users');
        console.error('API error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSimilar();
  }, [userEmail]);

  if (loading) return <p>Loading similar users...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Similar Profiles</h2>
      {similarUsers.length === 0 ? (
        <p>No similar profiles found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {similarUsers.map((user, index) => (
            <div key={index} className="bg-white p-4 rounded-xl shadow-md">
              <img
                src={`http://localhost:5000/${user.profilePhoto}`}
                alt={user.fullName}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <h3 className="text-lg font-semibold">{user.fullName}</h3>
              <p className="text-sm text-gray-500">{user.email}</p>
              <p className="text-sm text-gray-500">📞 {user.phoneNumber || 'N/A'}</p>

              <p className="text-sm mt-2">
                <strong>Similarity:</strong> {(user.similarity * 100).toFixed(2)}%
              </p>
              <div className="mt-2 text-sm text-gray-700">
                <strong>Interests:</strong> {user.interests.join(', ')}
              </div>
              <div className="mt-3 flex gap-2">
                {user.instagram && (
                  <a
                    href={user.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-600"
                  >
                    Instagram
                  </a>
                )}
                {user.facebook && (
                  <a
                    href={user.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                  >
                    Facebook
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SimilarProfiles;
