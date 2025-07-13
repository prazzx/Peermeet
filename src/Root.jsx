import Navbar from './Components/Navbar'

import Footer from './Components/footer'
import { Outlet } from 'react-router'

const Root = () => {
  return (
   
   <>
   <Navbar/>
   <Outlet/>{ /* bascially outlet le chai  dynmaicaaly render garne page */}
   <Footer/>
   </>
  )
}

export default Root
