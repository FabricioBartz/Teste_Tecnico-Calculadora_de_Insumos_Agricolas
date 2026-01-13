import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Plantio from './pages/Plantio'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Plantio />
  </StrictMode>,
)