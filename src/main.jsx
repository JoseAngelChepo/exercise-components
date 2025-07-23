import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ServicesProvider } from './data/providers/ServicesProvider.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store'
import Router from './router'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <ServicesProvider>
      <Provider store={store}>
        <Router />
      </Provider>
    </ServicesProvider>
  // </StrictMode>,
)
