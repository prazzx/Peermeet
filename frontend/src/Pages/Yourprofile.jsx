import React, { useEffect, useState } from 'react';
//import axios from 'axios';

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch user profile on mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/profile/get?karn.aman007@gmail.com'); // replace with dynamic email or auth
        setProfile(res.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching profile:', err);
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (!profile) return <div className="text-center mt-10">No profile found.</div>;

  return (
    <div className="max-w-2xl mx-auto p-6 mt-10 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Your Profile</h2>

      {profile.profilePhoto && (
        <img
          src={`http://localhost:5000/uploads/${profile.profilePhoto}`}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover mb-4"
        />
      )}

      <div className="space-y-2">
        <p><strong>Full Name:</strong> {profile.fullName}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Location:</strong> {profile.location}</p>
        <p><strong>Role:</strong> {profile.role}</p>
        <p><strong>Bio:</strong> {profile.bio}</p>

        <div>
          <strong>Interests:</strong>
          <ul className="list-disc ml-6">
            {profile.interests.map((interest, idx) => (
              <li key={idx}>{interest}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
