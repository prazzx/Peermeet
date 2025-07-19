import { Outlet } from "react-router"
import Navbar2 from './Components/Navbar2'
import Footer from './Components/footer'

const Layout = () => {
  return (
    <div>
      <div className='flex flex-col min-h-screen'>
        <Navbar2/>
        <main className="flex-grow">
          <Outlet />{ /* bascially outlet le chai  dynmaicaaly render garne page */}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
