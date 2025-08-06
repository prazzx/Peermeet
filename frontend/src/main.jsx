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
import Yourprofile from './Pages/Yourprofile'
import SearchResults from './Pages/searchResults'
import ProtectedRoute from './Components/ProtectedRoute'


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
      { path: "dashboard", element:<ProtectedRoute> <Dashbord /></ProtectedRoute>  },
      {path : "Updateprofile", element:<ProtectedRoute> <Updateprofile/></ProtectedRoute> },
      {path : "Yourprofile", element: <ProtectedRoute><Yourprofile/></ProtectedRoute> },
      {path : "searchResults", element: <ProtectedRoute><SearchResults/></ProtectedRoute> }
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routing101} /> {/*takes props to run */}
  </StrictMode>,
)
