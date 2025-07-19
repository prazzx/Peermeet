import herosection from '../Assets/herosection.png';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import React, { useState } from 'react';
import 'react-toastify/ReactToastify.css';
import { handleError, handleSuccess } from './utils';
import { auth, googleProvider } from "./firebase";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();

  const [loginInfo, setloginInfo] = useState({
    email: '',
    password: ''
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setloginInfo(prev => ({ ...prev, [name]: value }));
  };

  const handlelogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;

    if (!email || !password) {
      return handleError('All fields must be filled');
    }

    try {
      // ✅ Login with Firebase Email/Password
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      handleSuccess('Login successful');

      // ✅ Navigate to home/dashboard after login
      setTimeout(() => {
        navigate('/dashboard'); // Change route as per your app
      }, 2000);

    } catch (error) {
      console.error('Login error:', error);
      handleError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google login successful");
      handleSuccess("Logged in with Google Account successfully");

      // ✅ Navigate after successful Google login
      navigate('/dashboard'); // Change route as per your app

    } catch (error) {
      console.error("Error during Google sign-in:", error);
      handleError("Google sign-in failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl flex items-center justify-between gap-12">
        {/* Hero Section */}
        <div className="hidden lg:flex flex-1 items-center justify-center">
          <div className="relative">
            <img 
              src={herosection} 
              alt="Learning and education" 
              className="w-full max-w-2xl h-auto object-contain"
            />
          </div>
        </div>

        {/* Login Form */}
        <div className="w-full max-w-md">
          {/* Main Form Container */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 space-y-6">
            {/* Header */}
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Welcome Back
              </h1>
              <p className="text-gray-600">Sign in to your account</p>
            </div>

            {/* Form */}
            <form onSubmit={handlelogin} className="space-y-5">
              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input
                    onChange={handlechange}
                    type="email"
                    name="email"
                    id="email"
                    autoFocus
                    placeholder="Enter your email"
                    value={loginInfo.email}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:bg-gray-50"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <input
                    onChange={handlechange}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    value={loginInfo.password}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:bg-gray-50"
                    required
                  />
                </div>
              </div>

              {/* Forgot Password Link */}
              
            <div className="text-right">
  <Link 
    to="/forgotpassword" 
    className="text-sm text-purple-600 hover:text-purple-700 font-medium hover:underline transition-colors"
  >
    Forgot your password?
  </Link>
</div>


              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg"
              >
                Sign In
              </button>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500 font-medium">or continue with</span>
                </div>
              </div>

              {/* Google Sign In Button */}
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="w-full bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] hover:shadow-md flex items-center justify-center space-x-3"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span>Continue with Google</span>
              </button>
            </form>

            {/* Footer */}
            <div className="text-center pt-4 border-t border-gray-100">
              <span className="text-gray-600">
                Don't have an account?{' '}
                <Link 
                  to="/signup" 
                  className="text-purple-600 hover:text-purple-700 font-semibold hover:underline transition-colors"
                >
                  Sign up here
                </Link>
              </span>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 text-center text-xs text-gray-500">
            <p>By signing in, you agree to our</p>
            <div className="space-x-4 mt-1">
              <button className="hover:text-purple-600 transition-colors">Terms of Service</button>
              <span>•</span>
              <button className="hover:text-purple-600 transition-colors">Privacy Policy</button>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  )
}

export default Login