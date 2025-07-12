 import logo from '../Assets/logo.png'
export default function Navbar(){
  return(
    <nav className='text-bg border-b-2 '>
    <div className='relative max-w-5xl h-15 mx-auto flex items-center justify-between'>
      <a href='' className="py-1 px-1">
        <img src = {logo} alt='logo' className= " w-35 h-32" ></img>
</a>
<ul className=" flex space-x-8">

  <a href='#' className="text-black px-4 py-1.5 font-mono  font-extrabold cursor-pointer hover:text-teal-800 ">About</a>
  <a  href='#features' className="text-black px-4 py-1.5 font-mono  font-extrabold cursor-pointer hover:text-teal-800">Features</a>

  <li className="text-black font-extrabold    hover:text-sky-900 hover:bg-white  px-4 py-1.5 font-mono   cursor-pointer  ">Login</li>

  <button className="text-white bg-indigo-600 hover:bg-white px-3.5 py-1.5 font-mono  cursor-pointer  hover:text-black  border-2 border-solid border-blue-900 rounded-sm ">Register now?</button>
  
</ul>
</div>
  </nav>
  )
}