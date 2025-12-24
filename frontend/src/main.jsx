import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import{ Toaster } from 'react-hot-toast';
import { UserProvider } from './hooks/useUser'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <UserProvider>
    <Toaster/>
    <App />
    </UserProvider>
  </StrictMode>
  </BrowserRouter>
)
