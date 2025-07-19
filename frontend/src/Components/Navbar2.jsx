import logo from '../Assets/logo.png';
import { Link, NavLink, useNavigate  } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();
    return (
        <nav className='text-bg border-b-2'>
            <div className='relative max-w-6xl h-16 mx-auto flex items-center justify-between px-4'>

                {/* Logo */}
                <NavLink to='/dashboard' className='py-1 px-1'>
                    <img src={logo} alt='logo' className='w-28 h-20' />
                </NavLink>

                {/* Center: Search */}
                <div className='flex-1 mx-8'>
                    <input
                        type='text'
                        placeholder='Search...'
                        className='w-full px-4 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                </div>

                {/* Right: Nav links */}
                <ul className='flex space-x-6 items-center'>
                    <NavLink
                        to='/Updateprofile'
                        className="text-white bg-indigo-600 hover:bg-white px-3.5 py-1.5 font-mono  cursor-pointer  hover:text-black  border-2 border-solid border-blue-900 rounded-sm "
                    >
                        Update Profile
                    </NavLink>

                    <button
                        onClick={() => {
                            const confirmed = window.confirm('Are you sure you want to logout?');
                            if (confirmed) {
                                navigate('/');
                                alert('Logged out');
                            }
                        }}
                        className='text-white bg-red-600 hover:bg-red-700 px-3 py-1.5 font-mono'
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    );
}
