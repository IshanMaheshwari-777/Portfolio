import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
        <div className='py-12 px-8 flex flex-wrap gap-5'>
            <ProjectCard title='Dishcover' main="
             Developing a web app that suggests recipes based on available ingredients and displays nutritional information. Planned advanced features like image-based ingredient detection and speech-to-text for hands-free recipe discovery." Tech='HTML5, CSS3, Javascript, ReactJS' demo="https://dishcover-lemon.vercel.app/" source="https://github.com/IshanMaheshwari-777/Dishcover"/>
        </div>
      
    </div>
  )
}

export default Projects
