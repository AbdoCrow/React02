import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // Import BrowserRouter
import './index.css'
import App from './App.jsx'
import { FavoritesProvider } from './context/FavouritesContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* Wrap App with the Router */}
    <FavoritesProvider>
      <App />
    </FavoritesProvider>
    </BrowserRouter>
  </StrictMode>,
)