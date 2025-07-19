import logo from '../Assets/logo.png'
import {Link,NavLink} from 'react-router-dom'

export default function Navbar(){
  return(
    <nav className='text-bg border-b-2 '>
    <div className='relative max-w-5xl h-15 mx-auto flex items-center justify-between'>
      <NavLink to = '' className="py-1 px-1">
        <img src = {logo} alt='logo' className= " w-35 h-32" ></img>
</NavLink>
<ul className=" flex space-x-8">

  <NavLink to='/about' className="text-black px-4 py-1.5 font-mono font-extrabold cursor-pointer hover:text-teal-800 hover:bg-teal-50 rounded-md transition-all duration-300 hover:scale-105">About</NavLink>
  
 <a href='/' className="text-black px-4 py-1.5 font-mono font-extrabold cursor-pointer hover:text-teal-800 hover:bg-teal-50 rounded-md transition-all duration-300 hover:scale-105"  onClick={(e) => {
  e.preventDefault();
  window.location.href = '/#features';
}}>
  Features
</a>

  <NavLink  to = '/login'className="text-black font-extrabold hover:text-sky-900 hover:bg-sky-50 px-4 py-1.5 font-mono cursor-pointer rounded-md transition-all duration-300 hover:scale-105">Login</NavLink>

  <NavLink to = '/signup' className="text-white bg-indigo-600 hover:bg-indigo-700 px-3.5 py-1.5 font-mono cursor-pointer hover:text-white border-2 border-solid border-indigo-600 hover:border-indigo-700 rounded-sm transition-all duration-300 hover:scale-105 hover:shadow-lg">Register now?</NavLink>
  
</ul>
</div>
  </nav>
  )
}