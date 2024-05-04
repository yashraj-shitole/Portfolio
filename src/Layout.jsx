import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


const Layout = () => {

  return (

 <div className=' overflow-hidden'>
                <Navbar/>


        <div >
                  <Outlet/>
        </div>

          <Footer/>
    </div>


  )
}

export default Layout
