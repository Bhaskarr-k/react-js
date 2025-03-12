import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import app from './App.jsx'
import { Import } from './import.jsx'
import { Import1 } from './import.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Import />
    <Import1/>
  </StrictMode>,
)
