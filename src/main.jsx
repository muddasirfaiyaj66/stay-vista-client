import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider
} from "react-router-dom";
import './index.css'
import { router } from './routes/Routes';
import AuthProvider from './providers/AuthProviders';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <HelmetProvider>
   <AuthProvider>
      <Toaster/>
    <RouterProvider router={router}/>
    </AuthProvider>
   </HelmetProvider>

  </React.StrictMode>,
)
