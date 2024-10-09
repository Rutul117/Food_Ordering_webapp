import { createRoot } from 'react-dom/client'
import './global.css'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import { Auth0Provider } from '@auth0/auth0-react'
import React from 'react'
import Auth0ProviderWithNavigate from './auth0/Auth0ProviderWithNavigate'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Auth0ProviderWithNavigate>
        <AppRoutes/>
      </Auth0ProviderWithNavigate>
    </Router>
  </React.StrictMode>,
)
