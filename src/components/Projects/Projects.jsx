import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
        <div className='py-12 px-8 flex flex-wrap gap-5'>
            <ProjectCard title='Dishcover' main="
             Developing a web app that suggests recipes based on available ingredients and displays nutritional information. Planned advanced features like image-based ingredient detection and speech-to-text for hands-free recipe discovery." Tech='HTML5, CSS3, Javascript(ES6+), React.js' demo="https://dishcover-lemon.vercel.app/" source="https://github.com/IshanMaheshwari-777/Dishcover"/>
              <ProjectCard title='Brainwave AI' main="
             Brainwave is a sleek AI-powered web application built using the Gemini API, offering intelligent and context-aware responses for a wide range of queries—from creative writing and coding help to everyday questions. Designed with a modern, responsive UI, it features a smooth user experience enhanced by functionalities like a dark/light theme toggler, real-time typing animations, and a mobile-friendly layout. Whether you're exploring ideas, solving problems, or just curious, Brainwave delivers fast, relevant answers through an intuitive and interactive interface." Tech='HTML5, Tailwind CSS, Javascript(ES6+), React.js,Gemini API (REST)' demo="https://brainwave-nine-orpin.vercel.app/" source="https://github.com/IshanMaheshwari-777/Brainwave"/>
        </div>
      
    </div>
  )
}

export default Projects
