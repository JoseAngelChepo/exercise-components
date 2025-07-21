import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './providers/ThemeProvider.jsx'
import { ServicesProvider } from './providers/ServicesProvider.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store'
import Router from './router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <ServicesProvider>
        <Provider store={store}>
          <Router />
        </Provider>
      </ServicesProvider>
    </ThemeProvider>
  </StrictMode>,
)
