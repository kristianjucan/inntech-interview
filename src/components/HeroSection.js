import React from 'react'
import headerImage from '../images/headerImage.png'


function HeroSection() {
  return (
    <div className='container relative flex items-center justify-center mx-auto lg:w-10/12 my-10 flex-col lg:flex-row '>
        <div className='mx-auto lg:text-left h-96 w-10/12 lg:w-full lg:justify-evenly justify-around flex flex-col lg:items-start items-center'>
            <h1 className='xl:text-8xl lg:text-6xl text-5xl font-raleway font-bold text-regal-blue z-10 2xl:-mb-10'>LOREM IPSUM</h1>
            <p className=' lg: w-2/4 w-3/4 font-raleway text-regal-blue'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <button className='bg-peach hover:bg-orange-500 py-4 px-12 rounded-full text-white drop-shadow-md font-raleway font-bold'>FA-TI CONT GRATUIT</button>
        </div>
        <div className='flex lg:justify-end justify-center mt-10 '>
            <img className='xl:w-full w-4/5 z-10 rounded-full outline outline-white outline-offset-8' src={headerImage} />
        </div>
    </div>
  )
}

export default HeroSection