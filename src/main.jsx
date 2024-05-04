import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './About.jsx'
import HomePage from './HomePage.jsx'
import Layout from './Layout.jsx'
import Work from './Work.jsx'
import './index.css'


const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:"",
          element:<About/>
        },
        {
          path:"work",
          element:<Work/>
        }
      ]
    }
  ]
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
