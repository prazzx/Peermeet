import React, { useState } from 'react';
import logo from '../Assets/logo.png';
import { auth } from '../Pages/firebase.js';
import { signOut } from 'firebase/auth';
import { useNavigate, NavLink } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const handlelogout = () => {
        const confirm = window.confirm('Are you sure you want to logout?');
        if (confirm) {
            signOut(auth)
                .then(() => {
                    navigate('/');
                    alert('logged out');
                })
                .catch((error) => {
                    console.error('Error signing out:', error);
                    alert('Failed to log out');
                });
        }
    };

    const handleSearch = () => {
  if (!searchTerm.trim()) {
    alert("Please enter something to search.");
    return;
  }
  navigate(`/searchResults?query=${encodeURIComponent(searchTerm)}`);
};


    return (
        <nav className='text-bg border-b-2'>
            <div className='relative max-w-6xl h-16 mx-auto flex items-center justify-between px-4'>

                {/* Logo */}
                <NavLink to='/dashboard' className='py-1 px-1'>
                    <img src={logo} alt='logo' className='w-28 h-20' />
                </NavLink>

                <div className='flex-1 mx-8 flex'>
                    <input
                        type='text'
                        placeholder='Search...'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className='w-full px-4 py-1.5 border border-gray-300 rounded-l-md focus:outline-none '
                    />
                    <button
                        onClick={handleSearch}
                        className='bg-indigo-600 text-white px-4 py-1.5 rounded-r-md hover:bg-white hover:text-black  border-2 border-solid border-blue-900   '
                    >
                        Search
                    </button>
                </div>


                {/* Right: Nav links */}
                <ul className='flex space-x-6 items-center'>
                    <NavLink
                        to='/Yourprofile'
                        className="text-white bg-indigo-600 hover:bg-white px-3.5 py-1.5 font-mono  cursor-pointer  hover:text-black  border-2 border-solid border-blue-900 rounded-sm "
                    >
                        Your Profile
                    </NavLink>
                    <NavLink
                        to='/Updateprofile'
                        className="text-white bg-indigo-600 hover:bg-white px-3.5 py-1.5 font-mono  cursor-pointer  hover:text-black  border-2 border-solid border-blue-900 rounded-sm "
                    >
                        Update Profile
                    </NavLink>


                    <button
                        onClick={handlelogout}

                        className='text-white bg-red-600 hover:bg-red-700 px-3 py-1.5 font-mono'
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    );
};
