import { Link, useNavigate } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import React, { useState } from 'react';
import 'react-toastify/ReactToastify.css'
import { handleError, handleSuccess } from './utils';



const Signup = () => {
  const [signupInfo, setsignupInfo] = useState({
    name: '',
    email: '',
    password: ''
  })

  const navigate = useNavigate();
  const handlechange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const copysignupInfo = { ...signupInfo }; //Creating an object so that it can pass throgh the database
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
          body: JSON.stringify(signupInfo)
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
