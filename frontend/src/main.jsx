import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import { UserContextProvider } from "./contexts/UserContextProvider.jsx";

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <BrowserRouter>
    <HelmetProvider>
      <UserContextProvider>

    <App />
      </UserContextProvider>
  </HelmetProvider>
    </BrowserRouter>
  </StrictMode>,
)
