import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
// import  Import  from './ImportExport.jsx'
import { Import1 } from './ImportExport.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Import1/>
  </StrictMode>,
)
