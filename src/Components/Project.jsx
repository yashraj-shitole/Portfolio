import React from 'react'
import { Link } from 'react-router-dom'
import { PiArrowBendDownRightFill } from "react-icons/pi";



const Project = (props) => {
  return (
    <div className='border w-[90%] md:max-w-[500px] border-[#38383810] bg-[#38383820] rounded-3xl p-2'>
        <Link className='flex flex-col gap-2  w-[100%]' target='_' to={props.link}>
        <h2 className='  rounded-3xl  p-3 top-4 left-4 text-black text-3xl font-bold '>{props.name}</h2>

            <div className='rounded-3xl border  overflow-hidden relative h-[250px]   bg-cover'  >
                    <img className='object-cover' src={props.url} alt="" />
                    
            </div>
            <div className='flex justify-end px-5'>
            <PiArrowBendDownRightFill size={30}/>

            </div>


        
        </Link>
    </div>
  )
}

export default Project
