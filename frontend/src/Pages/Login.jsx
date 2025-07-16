import pic from '../Assets/herosection.png'
 import {Link} from 'react-router'
 import { ToastContainer } from 'react-toastify'
import React, { useState } from 'react';
import 'react-toastify/ReactToastify.css'
import { handleError, handleSuccess } from './utils';
import { auth, googleProvider } from "./firebase";
import { signInWithPopup } from "firebase/auth";


const Login = () => {

    const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const token = await result.user.getIdToken();
  
      const response = await fetch("http://localhost:5000/api/protected", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
  
      if(response.ok){
        console.log("Google login successful");
        handleSuccess("Logged in with Google Account successfully");
      }
    
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Server error:", errorText);
        handleError(`Server error: ${response.status}`);
        return;
      }
  
    } catch (error) {
      console.error("Error during sign-in:", error);
      handleError("Google sign-in failed. Please try again.");
    }
  };


const [loginInfo, setloginInfo] = useState({
    email: '',
    password: ''
  })

//const navigate = useNavigate(); To be used when Home page is ready
  const handlechange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const copyloginInfo = { ...loginInfo };
    copyloginInfo[name] = value;
    setloginInfo(copyloginInfo);
  }

  const handlelogin = async (e) => {
    e.preventDefault();
    const {email,password} = loginInfo;
    if( !email || !password){
      return handleError('All fields must be filled');
    }
    try{
      const url = "http://localhost:5000/auth/login"
      const response = await fetch(url,
        {
          method:"POST",
          headers:{
            'Content-type':'application/json'
          },
          body: JSON.stringify(loginInfo) 
        }
      )
      const result = await response.json();
      const {success, message, error} = result;
      if(success){
        handleSuccess(message);
        /*setTimeout(()=>{
          navigate('/home page when created');
        }, 2000)*/
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
      <h1>Login</h1>
      <form onSubmit={handlelogin}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={handlechange}
            type="email"
            name="email"
            placeholder="Enter your email"
             value={loginInfo.email} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={handlechange}
            type="password"
            name="password"
            placeholder="Enter your password" 
             value={loginInfo.password}/>
        </div>
        <button>Login</button>
        <br/>
        <h1>OR</h1>
        <button type="button" onClick={handleGoogleSignIn}>Login with Google</button>
        <br />
        <span>
          Don't have an account?
          <Link to="/signup">Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>


  )
}

export default Login
