import React from 'react'
import {FaCss3, FaFigma, FaHtml5, FaJs,FaReact} from 'react-icons/fa'
import github from '../../assets/github.png'
import leetcode from '../../assets/leetcode.png'
import neutron from '../../assets/Neutron.png'

import newton from '../../assets/newton.png'
import tailcss from '../../assets/Tailwind2.webp'
const Skills = () => {
  return (
    <div id ='Skill' className='p-10 md:p-24'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Skills & Achievements</h1>
        <div className='flex flex-wrap items-center justify-around'>
            <div className='flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10'>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                    <FaHtml5 color='#E34F26' size={50}/>
                </span>
                
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                    <FaCss3 color='#1572b6' size={50}/>
                </span>

                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                    <FaJs color='#F7DF1E' size={50}/>
                </span>

                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                    <FaReact color='#61DAFB' size={50}/>
                </span>

                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                    <img src={tailcss} alt="" className='w-13'/>
                    
                </span>

                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>

                <img src={github} alt="" className='w-13'/>
                </span>

                {/* <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                    <SiRadis color='#FF4438' size={50}/>
                </span> */}
            </div>
            <div>
            
            <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
            <img src={newton} alt="" className='w-14'/>
                <span className='text-white'>
                    <h2 className='leading-tight'>Student, NST</h2>
                    <p className='text-sm leading-tight font-thin'>
                        Aug 2024 - Present
                    </p>
                    <ul className='text-sm p-2'>
                        <li>- Completed 100 days of code challenge.</li>
                        <li>- Scored 9.043 CGPA in first semester.</li>
                    </ul>
                </span>

            </div>
            
            <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
            <img src={leetcode} alt="" className='w-14'/>
                <span className='text-white'>
                    <h2 className='leading-tight'>Problem Solver, Leetcode</h2>
                    <p className='text-sm leading-tight font-thin'>
                        Nov 2024 - Present
                    </p>
                    <ul className='text-sm p-2'>
                        <li>- Ongoing 190+ Day Streak</li>
                        <li>- Solved 250+ coding problems (Data Structures & Algorithms)</li>
                        <li > <a href="https://leetcode.com/u/ishanmaheshwari2004/" target='_blank'>🔗 [View My LeetCode Profile]</a></li>
                    </ul>
                </span>

            </div>

            

            <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
                <img src={neutron} alt="" className='w-14'/>
                <span className='text-white'>
                    <h2 className='leading-tight'>Outreach Member, Neutron Fest</h2>
                    <p className='text-sm leading-tight font-thin'>
                        March 2025-April 2025
                    </p>
                    <ul className='text-sm p-2'>
                        <li>- Led outreach efforts to onboard 80+ campus ambassadors across India</li>
                        <li>- Used structured communication and tracking tools to boost event engagement</li>
                    </ul>
                </span>

            </div>

            </div>
        </div>
    </div>
  )
}

export default Skills
