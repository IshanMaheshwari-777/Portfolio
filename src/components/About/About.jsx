import React from 'react';
import {IoArrowForward} from 'react-icons/io5';
import about from '../../assets/about.png';
const About = () => {
  return (
    <div id ='About'className= 'text-white md:flex overflow-hidden items-center md:justify-between md:flex-wrap bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
        
      <div>
        <h2 className='text-2xl md:text-4xl font-bold'>About</h2>
        <div className='md:flex flex-wrap flex-col md:flex-row items-center '>
            <img src={about} alt="" className='md:h-80 w-2.5/5 mx-35'/>
            <ul>
                <div className='flex gap-3 py-4'>
                    <IoArrowForward size={30} className='mt-1'/>
                    <span className='w-96'>
                        <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frontend Developer</h1>
                        <p className='text-sm md:text-md leading-tight'>Skilled in HTML, CSS, Tailwind CSS, JavaScript, and React, I focus on building user-centric and scalable web applications. I'm currently learning advanced frontend tools and expanding into full-stack technologies.</p>
                    </span>
                </div>

                <div className='flex gap-3 py-4'>
                    <IoArrowForward size={30} className='mt-1'/>
                    <span className='w-96'>
                        <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Competitive Programmer</h1>
                        <p className='text-sm md:text-md leading-tight'>I'm an amateur competitive programmer with a strong interest in problem-solving and algorithmic thinking. Consistent problem solver with a 190+ day LeetCode streak and a 950+ peak rating on Codeforces. I enjoy sharpening my logic and bringing that clarity into my frontend work.</p>
                        
                    </span>
                </div>

                <div className='flex gap-3 py-4'>
                    <IoArrowForward size={30} className='mt-1'/>
                    <span className='w-96'>
                        <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Video Editor</h1>
                        <p className='text-sm md:text-md leading-tight'>I'm a beginner video editor who enjoys experimenting with clips, transitions, and music in my free time. It's a creative outlet where I explore storytelling and visual rhythm — just for fun, learning as I go. While I'm still learning, video editing helps me think more creatively — a skill that often flows into my frontend work too.</p>
                    </span>
                </div> 
            </ul>
        </div>
      </div>
    </div>
  )
}

export default About
