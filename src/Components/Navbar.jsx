import 'animate.css';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Fade } from "react-awesome-reveal";
import { useEffect , useRef } from 'react';




const Navbar = () => {
  
  const ref = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [close,setClose]=useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(false);
    }, 6000);
  },[close]);

  
  return (

    <>
    
   
    <div className='  hidden z-50 backdrop-blur-sm  md:fixed w-[100%] top-0 md:flex items-center justify-between p-5'>
    
    <NavLink  to='/'>

        <svg className='shadow-2xl animate__animated animate__fadeInLeft' width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1_31)">
                <path d="M14.144 8.86402C14.144 9.95202 13.76 10.992 12.992 11.984C12.256 12.944 11.44 13.712 10.544 14.288C9.68001 14.864 8.86401 15.456 8.09601 16.064C7.36001 16.672 6.99201 17.2 6.99201 17.648C6.99201 18.576 7.64801 19.472 8.96001 20.336C10.304 21.2 11.808 21.632 13.472 21.632C15.136 21.632 16.704 21.344 18.176 20.768C19.648 20.16 20.832 19.232 21.728 17.984C21.824 14.88 21.872 11.936 21.872 9.15202C21.872 6.33602 21.664 4.57601 21.248 3.87201H12.368C14 5.5 14.144 7.13602 14.144 8.86402ZM25.184 8.14402L24.992 27.92C24.992 30.096 26.648 30.424 27 31C26.648 31.128 24.816 32.24 24.464 32.24C22.672 32.24 21.776 30.8 21.776 27.92C21.776 26.128 21.888 24.24 22.112 22.256C20.192 23.792 17.84 24.56 15.056 24.56C12.272 24.56 9.69601 23.568 7.32801 21.584C4.99201 19.568 3.82401 17.632 3.82401 15.776C3.82401 14.816 5.04001 13.6 7.47201 12.128C8.40001 11.584 9.24801 10.864 10.016 9.96802C10.784 9.07202 11.168 8.04802 11.168 6.89602C11.168 5.74402 10.736 4.73602 9.87201 3.87201H3.68001C1.47201 3.87201 0.368011 3.08802 0.368011 1.52002C0.368011 1.20002 0.400011 0.944013 0.464011 0.752014H28.352C30.56 0.752014 31.664 1.52002 31.664 3.05602C31.664 3.47201 31.616 3.74401 31.52 3.87201H23.936C24.768 4.44801 25.184 5.87201 25.184 8.14402Z" fill="#CCCCCC"/>
              </g>
              <defs>
                <clipPath id="clip0_1_31">
                <rect width="32" height="33" fill="white"/>
                </clipPath>
              </defs>
        </svg>
        </NavLink>
    <div className=' z-50 justify-center  items-center shadow-2xl rounded-full text-white md:text-3xl'>
      <ul className='flex p-3 gap-1 justify-center items-center'>
        <li className='pt-2 pb-2'>
          <NavLink className={({isActive})=>`p-3 ${isActive?"transition-all	 bg-blue-600 rounded-full":"transition-all	 text-black bg-[#FAFAFA] border-2 border-[#cccccc] rounded-full"}`} to='/'>About</NavLink>
        </li>

        <li className='pt-2 pb-2' >
          <NavLink className={({isActive})=>`p-3 ${isActive?"transition-all	 bg-blue-600 rounded-full":"transition-all	 text-black bg-[#FAFAFA] border-2 border-[#cccccc] rounded-full"}`} to='work'>Work</NavLink>
        </li>
      </ul>

    </div>


    {/* Resume link */}
   
          <Link target='_' to="https://docs.google.com/document/d/1ZhHKpIsGoKRbYNFInq4q-SzUS2-llOFxks9jNVwEpQI/edit?usp=sharing" className='animate__animated animate__fadeInRight  translate-all shadow-2xl p-2 md:p-4 text-white md:text-3xl bg-blue-600 rounded-full'>Resume</Link>

  


    </div>


    <div className=' bg-[#00000010] rounded-full fixed m-2 z-50 backdrop-blur-sm top-2 flex items-center justify-between pl-5 pr-5 w-[100%] h-10 md:hidden'>
      {/* nav bar for small mobile */}
      <NavLink  to='/'>

      <svg className='shadow-2xl animate__animated animate__fadeInLeft' width="25" height="25" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1_31)">
                <path d="M14.144 8.86402C14.144 9.95202 13.76 10.992 12.992 11.984C12.256 12.944 11.44 13.712 10.544 14.288C9.68001 14.864 8.86401 15.456 8.09601 16.064C7.36001 16.672 6.99201 17.2 6.99201 17.648C6.99201 18.576 7.64801 19.472 8.96001 20.336C10.304 21.2 11.808 21.632 13.472 21.632C15.136 21.632 16.704 21.344 18.176 20.768C19.648 20.16 20.832 19.232 21.728 17.984C21.824 14.88 21.872 11.936 21.872 9.15202C21.872 6.33602 21.664 4.57601 21.248 3.87201H12.368C14 5.5 14.144 7.13602 14.144 8.86402ZM25.184 8.14402L24.992 27.92C24.992 30.096 26.648 30.424 27 31C26.648 31.128 24.816 32.24 24.464 32.24C22.672 32.24 21.776 30.8 21.776 27.92C21.776 26.128 21.888 24.24 22.112 22.256C20.192 23.792 17.84 24.56 15.056 24.56C12.272 24.56 9.69601 23.568 7.32801 21.584C4.99201 19.568 3.82401 17.632 3.82401 15.776C3.82401 14.816 5.04001 13.6 7.47201 12.128C8.40001 11.584 9.24801 10.864 10.016 9.96802C10.784 9.07202 11.168 8.04802 11.168 6.89602C11.168 5.74402 10.736 4.73602 9.87201 3.87201H3.68001C1.47201 3.87201 0.368011 3.08802 0.368011 1.52002C0.368011 1.20002 0.400011 0.944013 0.464011 0.752014H28.352C30.56 0.752014 31.664 1.52002 31.664 3.05602C31.664 3.47201 31.616 3.74401 31.52 3.87201H23.936C24.768 4.44801 25.184 5.87201 25.184 8.14402Z" fill="#CCCCCC"/>
              </g>
              <defs>
                <clipPath id="clip0_1_31">
                <rect width="32" height="33" fill="white"/>
                </clipPath>
              </defs>
        </svg>
        </NavLink>


          
            <div className={isOpen?'transition-all duration-700  absolute right-1 flex':'transition-all  absolute right-[-100px] duration-700'}>
              
            

                <div className="top-20 transition-all flex flex-col justify-center items-start p-4 gap-1 relative w-33 h-auto bg-white shadow-lg rounded-lg">
                <ul>

                
                  <Fade cascade damping={0.05}>
                      <li>
                        <NavLink  className={({isActive})=>`${isActive?" text-lg text-blue-600 transition-all ":"text-lg  text-black transition-all "}`} to='/'>About</NavLink>
                      </li>

                      <div className="rounded-full w-full h-0 border  border-gray-300 "></div>
                      
                      <li>
                        <NavLink className={({isActive})=>`${isActive?"text-lg text-blue-600 transition-all  ":"text-lg  text-black transition-all"}`} to='/work'>Work</NavLink>
                      </li>
                      
                      <div className="rounded-full w-full h-0 border  border-gray-300  "></div>

                      <li>
                        <NavLink className="text-lg  text-black transition-all " target='_' to="https://docs.google.com/document/d/1ZhHKpIsGoKRbYNFInq4q-SzUS2-llOFxks9jNVwEpQI/edit?usp=sharing">Resume</NavLink>
                      </li>
                  </Fade>
                  </ul>
                </div>
              
              
            </div>

    <button  className="animate__animated animate__fadeInRight gap-1 right-10 items-end flex flex-col" onClick={()=>{setIsOpen(!isOpen);setClose(close+1)}}>
        <div className={isOpen ? 'transition-all ease-in-out	 duration-700 delay-200 rounded-full bg-black h-1 w-5  transform rotate-45 translate-y-2' : 'rounded-full bg-black h-1 w-5 transition-all ease-in-out	 duration-700'}></div>
        <div className={isOpen ? 'transition-all ease-in-out	 duration-700  rounded-full bg-black h-1 w-7 opacity-0' : 'rounded-full bg-black h-1 w-4 transition-all duration-700 ease-in-out	 delay-200'}></div>
        <div className={isOpen ? 'transition-all ease-in-out	 duration-700 delay-200 rounded-full bg-black h-1 w-5  transform -rotate-45 -translate-y-2 ' : 'rounded-full bg-black h-1 w-5 transition-all ease-in-out	 duration-700'}></div>
      </button>
    </div>

    </>
  )
}
export default Navbar
