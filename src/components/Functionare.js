import React from 'react'
import clepsidraOrange from '../images/clepsidraOrange.svg'
import bgFunctionare from '../images/bgFunctionare.png'

function Functionare() {
  return (
    <div className=' relative mx-auto z-20 xl:mt-60 mt-20 md:mt-0'>
        <div className=' container mx-auto h-screen flex justify-center items-center flex-col lg:p-0 p-5'>
        <div className='z-50'>
            <h3 className='font-raleway font-bold lg:text-4xl text-2xl text-white mb-10 '>CUM FUNCTIONEAZA</h3>
            </div>
        <div className='grid gap-4 lg:grid-cols-4 lg:grid-rows-1 grid-cols-2 md:grid-rows-auto justify-items-center'>
            <div className='flex flex-col  md:w-10/12 items-center justify-center z-50 bg-white rounded-3xl p-2 hover:scale-105'>
                <img src={clepsidraOrange} alt='functionare icon' className=' mb-3'/>
                <h4 className='text-orange-600 font-bold'>MAURIS NON</h4>
                <p className='text-xs mt-3 font-raleway'>Pellentesque ipsum, quis blandit nisi enim eget sapien. Nulla eget ligula eget nunc vestibulum eleifend a vel mi. Ut nec turpis elit.</p>
            </div>
            <div className='flex flex-col lg:w-12/12 md:w-10/12 items-center justify-center z-50 bg-white rounded-3xl p-2 hover:scale-105'>
                <img src={clepsidraOrange} alt='functionare icon' className=' mb-3'/>
                <h4 className='text-orange-600 font-bold'>MAURIS NON</h4>
                <p className='text-xs mt-3 font-raleway'>Pellentesque ipsum, quis blandit nisi enim eget sapien. Nulla eget ligula eget nunc vestibulum eleifend a vel mi. Ut nec turpis elit.</p>
            </div>
            <div className='flex flex-col lg:w-12/12 md:w-10/12 items-center justify-center z-50 bg-white rounded-3xl p-2 hover:scale-105'>
                <img src={clepsidraOrange} alt='functionare icon' className=' mb-3'/>
                <h4 className='text-orange-600 font-bold'>MAURIS NON</h4>
                <p className='text-xs mt-3 font-raleway'>Pellentesque ipsum, quis blandit nisi enim eget sapien. Nulla eget ligula eget nunc vestibulum eleifend a vel mi. Ut nec turpis elit.</p>
            </div>
            <div className='flex flex-col lg:w-12/12 md:w-10/12 items-center justify-center z-50 bg-white rounded-3xl p-2 hover:scale-105'>
                <img src={clepsidraOrange} alt='functionare icon' className=' mb-3'/>
                <h4 className='text-orange-600 font-bold'>MAURIS NON</h4>
                <p className='text-xs mt-3 font-raleway'>Pellentesque ipsum, quis blandit nisi enim eget sapien. Nulla eget ligula eget nunc vestibulum eleifend a vel mi. Ut nec turpis elit.</p>
            </div>
            </div>
            <img src={bgFunctionare} className=' absolute lg:block mb-40 hidden'/>
            <div className='absolute bg-regal-blue w-full md:h-3/4 h-full lg:hidden'></div>
        </div>
    </div>
  )
}

export default Functionare