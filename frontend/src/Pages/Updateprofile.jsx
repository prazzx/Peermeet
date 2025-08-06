import { useNavigate } from 'react-router';
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import { handleError, handleSuccess } from './utils';


const interestsList = [
  'Painting', 'Photography', 'Graphic Design', 'Writing',
  'Singing', 'Guitar', 'Dancing', 'Music Production',
  'Reading', 'Philosophy', 'History', 'Science',
  'Programming', 'Web Development', 'AI/ML', 'Cybersecurity',
  'Yoga', 'Fitness', 'Mental Health', 'Hiking',
  'Gaming', 'Movies', 'Anime', 'Traveling',
  'Volunteering', 'Sustainability', 'Human Rights', 'Animal Welfare'
];

export default function UpdateProfile() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    location: '',
    bio: '',
    role: '',
    interests: [],
    profilePhoto: null,
    instagram: '',
    facebook: '',
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleMultiSelect = (name, value) => {
    setFormData((prev) => {
      const alreadySelected = prev[name].includes(value);
      return {
        ...prev,
        [name]: alreadySelected
          ? prev[name].filter((v) => v !== value)
          : [...prev[name], value],
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('fullName', formData.fullName);
    data.append('email', formData.email);
    data.append('location', formData.location);
    data.append('bio', formData.bio);
    data.append('role', formData.role);
    data.append('profilePhoto', formData.profilePhoto);
    data.append('instagram', formData.instagram);
    data.append('facebook', formData.facebook);
    data.append('interests', JSON.stringify(formData.interests));


    try {
      const res = await fetch('http://localhost:5000/api/profile/update', {
        method: 'POST',
        body: data,
      });

      const result = await res.json();
      if (res.ok) {
        handleSuccess("Data updated successfully");
        setTimeout(() => {
          navigate('/Yourprofile');
        }, 1000);
      } else {
        handleError("Something went wrong.");
      }
    } catch (err) {
      console.error('Error submitting form:', err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 shadow rounded-lg bg-white mt-10">
      <h2 className="text-2xl font-bold mb-4">Update Your Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block font-semibold">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Location / City</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Profile Photo</label>
          <input
            type="file"
            name="profilePhoto"
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Short Bio</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Profession / Role</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Instagram Link</label>
          <input
            type="url"
            name="instagram"
            value={formData.instagram}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Facebook Link</label>
          <input
            type="url"
            name="facebook"
            value={formData.facebook}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>


        <div>
          <label className="block font-semibold mb-1">Your Interests</label>
          <div className="flex flex-wrap gap-2">
            {interestsList.map((item) => (
              <button
                type="button"
                key={item}
                className={`px-3 py-1 rounded-full border ${formData.interests.includes(item)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100'
                  }`}
                onClick={() => handleMultiSelect('interests', item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>


        <div>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Save Profile
          </button>
        </div>
      </form>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
