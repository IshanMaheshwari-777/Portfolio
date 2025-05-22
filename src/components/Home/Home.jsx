import React from 'react'
import home from '../../assets/home.png'
import TextChanger from '../../TextChanger'
const Home = () => {
  return (
    <div className='text-white flex w-full items-start justify-between p-10 md:p-20'>
        <div className='md:w-2/4 md:pt-20'>
        <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tight'><TextChanger/></h1>
        <p className='text-sm md:text-2xl tracking-tight'>Code-driven interfaces with user experience in mind.</p>
        <button className='mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover-scale-105 font-semibold rounded-3xl bg-[#465697]'><a href="#Contact">Contact Me</a></button>

        </div>
      <div><img className ='w-3.5/5' src={home} alt="" /></div>
    </div>
  )
}

export default Home
