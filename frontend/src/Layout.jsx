import { Outlet } from "react-router"
import Usernavbar from "./Components/Usernavbar"
const Layout = () => {
  return (
    <div className="">
        <Usernavbar/>
      <Outlet/>
    </div>
  )
}

export default Layout
