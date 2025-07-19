import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import Body from './body'
import Root from './Root'
import About from './Pages/About'
import Login from './Pages/Login'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Signup from './Pages/Signup'
import Reset from './Pages/Pwreset'
import Dashbord from './Pages/Dashbord'
import Layout from './Layout'
import Updateprofile from './Pages/Updateprofile'


const routing101 = createBrowserRouter([
  {
    path: '/'
    , element: <Root />,
    children: [
      { path: "", element: <Body /> }, { path: "About", element: <About /> }, { path: "login", element: <Login /> }, { path: "signup", element: <Signup /> }, { path: "forgotpassword", element: <Reset /> },


    ]
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: "dashboard", element: <Dashbord /> },
      {path : "Updateprofile", element: <Updateprofile/>}
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routing101} /> {/*takes props to run */}
  </StrictMode>,
)
