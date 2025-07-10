 import logo from '../Assets/logo.png'
export default function Navbar(){
  return(
    <nav className='text-bg bg-indigo-500 '>
    <div className='relative max-w-5xl h-15 mx-auto flex items-center justify-between'>
      <a href='' className="py-1 px-1">
        <img src = {logo} alt='logo' className= " w-35 h-32" ></img>
</a>
<ul className=" flex space-x-8">
  <li className="text-white px-4 py-1.5 font-mono  cursor-pointer hover:text-black ">About</li>
  <button className="text-white  px-4 py-1.5 font-mono   cursor-pointer  hover:text-black  border-2 border-solid  border-blue-900 rounded-sm ">Login</button>

  <button className="text-white px-3.5 py-1.5 font-mono  cursor-pointer  hover:text-black  border-2 border-solid  border-blue-900 rounded-sm ">Register now?</button>
  
</ul>
</div>
  </nav>
  )
}