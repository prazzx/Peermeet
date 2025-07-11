import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import Navbar from './Navbar'
import Body from './mid'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<Navbar/>
<Body/>
  </StrictMode>,
)
