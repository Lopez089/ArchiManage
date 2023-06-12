import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

import './index.css'

const CLIENT_ID = '679933917994-8jitnb84e28j1ma5cm2su7ap89v578u3.apps.googleusercontent.com'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
    <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
)
