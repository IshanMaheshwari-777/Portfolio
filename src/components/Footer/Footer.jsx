import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {CiLinkedin} from 'react-icons/ci'
import {FaGithub} from 'react-icons/fa'
const Footer = () => {
  return (
    <div id='Contact' className='p-10 md:p-12 text-white flex justify-around bg-[#465697] items-center'>
        <div className='flex flex-col items-center'>
            <h1 className='text-2xl md:text-6xl font-bold'>Contact Me</h1>
            <h3 className='text-sm md:text-2xl font-normal '>Feel Free to reach out!</h3>
        </div>
        <ul className='text-sm md:text-xl'>
            <li className='flex gap-1 items-center'>
                <MdOutlineEmail size={20}/>
                ishan.maheshwari2024@nst.rishihood.edu.in
                
            </li>
            <li className='flex gap-2 items-center'>
                <CiLinkedin/>
                
                <a href="https://www.linkedin.com/in/ishan-maheshwari-4b6154323/">LinkedIn</a>
            </li>
            <li className='flex gap-2 items-center'>
                <FaGithub/>
                <a href="https://github.com/IshanMaheshwari-777">GitHub</a>
            </li>
        </ul>
      
    </div>
  )
}

export default Footer
