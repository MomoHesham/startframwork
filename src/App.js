import React from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';

export default function App() {

  let routers = createBrowserRouter([
    {
      path: 'startframwork/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'contact',
          element: <Contact />
        },
        {
          path: 'portfolio',
          element: <Portfolio />
        },
        {
          path: '*',
          element: <NotFound />
        }
        
      ]
    }
  ])
  return <RouterProvider router={routers}></RouterProvider>
}
