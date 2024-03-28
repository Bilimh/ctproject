import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.tsx'
//import './index.css'


//import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//import routes from '~react-pages'
import Home from './pages/Index'

//const router = createBrowserRouter(routes)
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    < Home/>
  </React.StrictMode>
)
