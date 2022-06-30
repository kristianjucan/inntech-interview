import React from 'react'
import clepsidra from '../images/clepsidra.svg'


function Servicii() {
  return (
    <div className='container mx-auto lg:mt-80 mt-20 relative z-30 font-raleway text-regal-blue'>
        <div className='flex flex-col items-center justify-evenly h-60'>
            <h2 className='font-bold text-4xl lg:w-2/5 w-4/5 mb-1'>LOREM IPSUM DOLOR SIT (SERVICII)</h2>
            <p className='lg:w-2/5 w-4/5'>Suspendisse aliquam, quam vel rhoncus mattis, nibh metus pellentesque ipsum, quis blandit nisi enim eget sapien. Nulla eget ligula eget nunc vestibulum eleifend a vel mi. Ut nec turpis elit.</p>
        </div>
        <div className='grid lg:gap-4 gap-x-0 gap-y-8 lg:grid-cols-4 lg:grid-rows-2 mt-20 md: grid-cols-2 md:grid-rows-auto'>
        <span className='flex justify-center align-center z-30 '> 
            <img src={clepsidra} alt='icon serviciu'/>
            <div className='text-start ml-1'>
            <h3 className='text-md'>MAURIS NON</h3>
            <p className='text-xs w-20'>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            </div>
        </span>
        <span className='flex justify-center align-center z-30'> 
            <img src={clepsidra} alt='icon serviciu'/>
            <div className='text-start ml-1'>
            <h3 className='text-md'>MAURIS NON</h3>
            <p className='text-xs w-20'>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            </div>
        </span>
        <span className='flex justify-center align-center z-20'> 
            <img src={clepsidra} alt='icon serviciu'/>
            <div className='text-start ml-1'>
            <h3 className='text-md'>MAURIS NON</h3>
            <p className='text-xs w-20'>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            </div>
        </span>
        <span className='flex justify-center align-center'> 
            <img src={clepsidra} alt='icon serviciu'/>
            <div className='text-start ml-1'>
            <h3 className='text-md'>MAURIS NON</h3>
            <p className='text-xs w-20'>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            </div>
        </span>
        <span className='flex justify-center align-center'> 
            <img src={clepsidra} alt='icon serviciu'/>
            <div className='text-start ml-1'>
            <h3 className='text-md'>MAURIS NON</h3>
            <p className='text-xs w-20'>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            </div>
        </span>
        <span className='flex justify-center align-center'> 
            <img src={clepsidra} alt='icon serviciu'/>
            <div className='text-start ml-1'>
            <h3 className='text-md'>MAURIS NON</h3>
            <p className='text-xs w-20'>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            </div>
        </span>
        <span className='flex justify-center align-center'> 
            <img src={clepsidra} alt='icon serviciu'/>
            <div className='text-start ml-1'>
            <h3 className='text-md'>MAURIS NON</h3>
            <p className='text-xs w-20'>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            </div>
        </span>
        <span className='flex justify-center align-center'> 
            <img src={clepsidra} alt='icon serviciu'/>
            <div className='text-start ml-1'>
            <h3 className='text-md'>MAURIS NON</h3>
            <p className='text-xs w-20'>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            </div>
        </span>
        </div>
        <button className='bg-peach hover:bg-orange-500 mt-20 py-4 px-16 rounded-full text-white drop-shadow-md font-raleway font-bold drop-shadow-md'>BUTON</button>
    </div>
  )
}

export default Servicii