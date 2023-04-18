import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home';
import Owner from './Owner';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/owner',
    element: <Owner />
  },
  {
    path: '/',
    element: <Home />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
