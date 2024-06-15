import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Courses from './Courses'

import About from './About'
import Contact from './Contact'
import Gallery from './Gallery'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MpResult from './MpResult'
import CbseResults from './CbseResults'
import DirectorInfo from './DirectorInfo'
import Testimonial from './Testimonial'






const App = () => {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <> <Navbar/><Home/> <Courses/><MpResult/><CbseResults/><DirectorInfo/><Testimonial/><Contact/><About/></>
    },

    {
      path: "/about",
      element: <><Navbar/><DirectorInfo/><About/></>
    },
    {
      path: "/results/item1",
      element: <><Navbar/><CbseResults/><About/>
      </>
    },

    {
      path: "/results/item2",
      element: <><Navbar/><MpResult/><About/>
      </>
    },

    {
      path: "/gallery",
      element: <><Navbar/><Gallery/><About/>
      </>
    },
    {
      path: "/courses",
      element: <><Navbar/><Courses/><About/>
      </>
    },

    {
      path: "/contact",
      element: <><Navbar/> <Contact/><About/>
      </>
    },
   
   


  ])

  
  
  return (
    <div>
      
      <RouterProvider router={router} />
      
      
    </div>
  )
}

export default App
