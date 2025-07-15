import pic from '../Assets/herosection.png'
 import {Link} from 'react-router'

const Login = () => {
  return (
<>
<div className='flex max-w-[1080px]  '>

  <div className="  px-10  py-6 m-auto content-center shadow-2xl rounded-b-2xl">
    <h1 className='font-extrabold text-[20px]'>Welcome back</h1>
    <p>Login to your peermeet account</p>
    < form className='text-[17px] '>
      <label>Email</label>
      <input type='text' placeholder='username ' required />
      <br></br>
      <label>Password</label>
      <input type='password' placeholder='password' required />
      <br></br>
      <button>Login</button>
      <p>or continue with </p>
      <button>login with goolge </button>
       <span> <Link to = "/forgotpassword">Forgot password? </Link> </span> 

      <p> Don't have an account ? <span> <Link to = "/signup">signup </Link> </span> </p>
    </form>
  </div>

  <div className='max-w-[480px] '>
<img src ={pic} ></img>
  </div>

</div>
</>

  )
}

export default Login
