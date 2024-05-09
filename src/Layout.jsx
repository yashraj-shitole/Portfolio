import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AnimatedCursor from "react-animated-cursor"


const Layout = () => {

  return (

 <div className=' overflow-hidden'>
  <AnimatedCursor
      innerSize={20}
      outerSize={15}
      color='10, 10, 10'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
                <Navbar/>


        <div >
                  <Outlet/>
        </div>

          <Footer/>

    </div>


  )
}

export default Layout
