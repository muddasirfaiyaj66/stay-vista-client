import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider
} from "react-router-dom";
import './index.css'
import { router } from './routes/Routes';
import AuthProvider from './providers/AuthProviders';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster/>
    <RouterProvider router={router}/>
    </AuthProvider>

  </React.StrictMode>,
)
