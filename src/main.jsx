import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import Body from './mid'
import Root from './Root'
import About from './Pages/About'
import { createBrowserRouter , RouterProvider } from 'react-router'

const routing101 = createBrowserRouter([
  {
    path: '/'
    , element: <Root/>,
    children: [
{ path:"", element:<Body/>} , { path:"About",element:<About/>}

    ]  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider  router={routing101}/> {/*takes props to run */}
  </StrictMode>,
)
