import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer flex flex-col items-center rounded-t-3xl p-10 bg-base-300  shadow-inner text-base-content">
    {/* <nav>
      <h6 className="footer-title">Services</h6> 
      <a className="link link-hover">Branding</a>
      <a className="link link-hover">Design</a>
      <a className="link link-hover">Marketing</a>
      <a className="link link-hover">Advertisement</a>
    </nav> 
    <nav>
      <h6 className="footer-title">Company</h6> 
      <a className="link link-hover">About us</a>
      <a className="link link-hover">Contact</a>
      <a className="link link-hover">Jobs</a>
      <a className="link link-hover">Press kit</a>
    </nav>  */}

<div className='flex items-center'>
    <h1 className='text-lg font-bold'>Made with love ❤️ by Yashraj</h1>
    <img className='h-20'
  src="https://api.dicebear.com/8.x/adventurer/svg?seed=Midnight&flip=true&rotate=350&earrings=variant04,variant05,variant06,variant01,variant02,variant03"
  alt="avatar" />
</div>
    <nav className='flex flex-col items-center'>
              <h6 className="footer-title">Social</h6> 


      <div className="flex gap-4">
        <a href='https://www.linkedin.com/in/yashraj-shitole-576442215/' target='_blank'><FaLinkedinIn  size={50} /></a>
        <a href='https://github.com/yashraj-shitole' target='_blank'><FaGithub size={50}/></a>
      </div>
    </nav>
  </footer>
  )
}

export default Footer
