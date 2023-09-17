import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//1- configurar React Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { db } from "./mock/tasks.mock"

import Home from '../src/routers/Home.jsx'
import Delete from '../src/routers/Delete.jsx'
import Edit from '../src/routers/Edit.jsx'
import Error from '../src/routers/Error.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children:[
      {
        path: "/",
        element: <Home data={db}/>
      },
      {
        path: "/delete/:id",
        element: <Delete data={db}/>
      },
      {
        path: "/edit/:id",
        element: <Edit data={db}/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
