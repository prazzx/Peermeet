import pmlogo  from '../Assets/logo.png'

const Footer = () => {
  return (
    
      <footer className='bg-gray-500 text-gray-100 '>
    <div className='grid grid-cols-3 gap-3 mx-auto py-12 px-6 '>

        <img src = {pmlogo} alt='logo' className= " w-40 h-40" ></img>
        <p  className='col-span-3'>Connecting Students, Building Futures</p>
        <p>© 2025 PeerMeet. All rights reserved.</p>
   

    </div>

</footer>
    
  )
}

export default Footer
