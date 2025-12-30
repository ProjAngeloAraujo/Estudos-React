import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/reset.css'
import './styles/theme.css'
import './styles/typography.css'
import './styles/global.css'
import './styles/Box.css'
import './styles/Buttons.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)