import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './providers/ThemeProvider.jsx'
import { ServicesProvider } from './providers/ServicesProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <ServicesProvider>
        <App />
      </ServicesProvider>
    </ThemeProvider>
  </StrictMode>,
)
