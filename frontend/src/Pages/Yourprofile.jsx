import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { auth } from './firebase';

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch user profile on mount
  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      const email = user.email;
      axios.get(`http://localhost:5000/api/profile/get?email=${email}`)
        .then(res => {
          console.log('Profile API response:', res.data); 
          
          
          if (res.data.success && res.data.data) {
            setProfile(res.data.data);
          } else {
            setProfile(res.data); 
          }
        })
        .catch(err => {
          console.error('Error fetching profile:', err);
        })
        .finally(() => setLoading(false));
    } else {
      console.error("User not authenticated");
      setLoading(false);
    }
  }, []);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (!profile) return <div className="text-center mt-10">No profile found.</div>;

  return (
    <div className="max-w-2xl mx-auto p-6 mt-10 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
      
      {profile.profilePhoto && (
        <img
          src={`http://localhost:5000/${profile.profilePhoto}`}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover mb-4"
        />
      )}

      <div className="space-y-2">
        <p><strong>Full Name:</strong> {profile.fullName || 'Not provided'}</p>
        <p><strong>Email:</strong> {profile.email || 'Not provided'}</p>
        <p><strong>Location:</strong> {profile.location || 'Not provided'}</p>
        <p><strong>Role:</strong> {profile.role || 'Not provided'}</p>
        <p><strong>Bio:</strong> {profile.bio || 'Not provided'}</p>
        <p><strong>Phone Number:</strong> {profile.phoneNumber|| 'Not provided'}</p>

        <div>
          <strong>Interests:</strong>
          {/* ✅ Safe rendering with proper checks */}
          {profile.interests && Array.isArray(profile.interests) && profile.interests.length > 0 ? (
            <ul className="list-disc ml-6">
              {profile.interests.map((interest, idx) => (
                <li key={idx}>{interest}</li>
              ))}
            </ul>
          ) : (
            <p className="ml-6 text-gray-500">No interests added yet</p>
          )}
        </div>
        <div className="mt-4">
  <strong>Social Links:</strong>
  <div className="flex gap-4 mt-2">
    {profile.instagram && (
      <a
        href={profile.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
      >
        Instagram
      </a>
    )}
    {profile.facebook && (
      <a
        href={profile.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Facebook
      </a>
    )}
    {!profile.instagram && !profile.facebook && (
      <p className="text-gray-500">No social links provided</p>
    )}
  </div>
</div>

      </div>
    </div>
  );
}