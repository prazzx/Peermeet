import Navbar from './Components/Navbar'

import Footer from './Components/footer'
import { Outlet } from 'react-router'

const Root = () => {
  return (
   
   <div className='flex flex-col min-h-screen'>
   <Navbar/>
    <main className="flex-grow">
   <Outlet/>{ /* bascially outlet le chai  dynmaicaaly render garne page */}
  </main>
   <Footer/>
 </div>
  )
}

export default Root
