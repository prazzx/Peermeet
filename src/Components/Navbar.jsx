 import logo from '../Assets/logo.png'
 import {Link,NavLink} from 'react-router'

export default function Navbar(){
  return(
    <nav className='text-bg border-b-2 '>
    <div className='relative max-w-5xl h-15 mx-auto flex items-center justify-between'>
      <NavLink to = '' className="py-1 px-1">
        <img src = {logo} alt='logo' className= " w-35 h-32" ></img>
</NavLink>
<ul className=" flex space-x-8">

  <NavLink to='/about' className="text-black px-4 py-1.5 font-mono  font-extrabold cursor-pointer hover:text-teal-800 ">About</NavLink>
  
 <a href='/' className="text-black px-4 py-1.5 font-mono font-extrabold cursor-pointer hover:text-teal-800" onClick={(e) => {
  e.preventDefault();
  window.location.href = '/#features';
}}>
  Features
</a>


  <NavLink  to = '/login'className="text-black font-extrabold    hover:text-sky-900 hover:bg-white  px-4 py-1.5 font-mono   cursor-pointer  ">Login</NavLink>

  <NavLink to = '/signup' className="text-white bg-indigo-600 hover:bg-white px-3.5 py-1.5 font-mono  cursor-pointer  hover:text-black  border-2 border-solid border-blue-900 rounded-sm ">Register now?</NavLink>
  
</ul>
</div>
  </nav>
  )
}