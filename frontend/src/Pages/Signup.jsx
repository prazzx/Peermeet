import { Link, useNavigate } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import React, { useState } from 'react';
import 'react-toastify/ReactToastify.css'
import { handleError, handleSuccess } from './utils';
import { auth, googleProvider } from "./firebase";
import { signInWithPopup } from "firebase/auth";




const Signup = () => {


  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result);
      const token = await result.user.getIdToken();

      console.log("Sending token:", token);


      const response = await fetch("http://localhost:5000/api/protected", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const userData = await response.json();
      console.log("User Data:", userData);
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  const [signupInfo, setsignupInfo] = useState({
    name: '',
    email: '',
    password: ''
  })

  const navigate = useNavigate();
  const handlechange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const copysignupInfo = { ...signupInfo }; //Creating an object so that it can passed to backend as json
    copysignupInfo[name] = value;
    setsignupInfo(copysignupInfo);
  }

  const handleSignup = async (e) => {
    e.preventDefault();
    const {name, email,password} = signupInfo;
    if(!name || !email || !password){
      return handleError('All fields must be filled');
    }
    try{
      const url = "http://localhost:5000/auth/signup"
      const response = await fetch(url,
        {
          method:"POST",
          headers:{
            'Content-type':'application/json'
          },
          body: JSON.stringify(signupInfo) //Sending string contents of json object created from input fields
        }
      )
      const result = await response.json();
      const {success, message, error} = result;
      if(success){
        handleSuccess(message);
        setTimeout(()=>{
          navigate('/login');
        }, 2000)
      }else if(error){
        const details = error?.details[0].message;
        handleError(details);
      }else if(!success){
        handleError(message);
      }

    }
    catch(err){
      handleError(err);
    }
  }

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSignup}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            onChange={handlechange}
            type="text"
            name="name"
            autoFocus
            placeholder="Enter your name"
            value={signupInfo.name} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={handlechange}
            type="email"
            name="email"
            placeholder="Enter your email"
             value={signupInfo.email} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={handlechange}
            type="password"
            name="password"
            placeholder="Enter your password" 
             value={signupInfo.password}/>
        </div>
        <button>Signup</button>
        <br />
        <h1>OR</h1>
        <button type="button" onClick={handleGoogleSignIn}>Login with Google</button>
        <br/>
        <span>
          Already have an account?
          <Link to="/login">Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Signup
