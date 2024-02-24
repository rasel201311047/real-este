import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import router from './Routers/Router1.jsx';
import { RouterProvider } from 'react-router-dom'
import AuthProviders from './Provider/AuthProviders.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <RouterProvider router={router}></RouterProvider>
    </AuthProviders>

  </React.StrictMode>,
)
