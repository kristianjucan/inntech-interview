import React from 'react'
import whiteLogo from '../images/whiteLogo.svg'
import insta from '../images/instaIcon.svg'
import fb from '../images/fbIcon.svg'
import linkedin from '../images/linkIcon.svg'

function Footer() {
  return (
    <div className=' w-full xl:h-96 md:h-96 h-screen flex xl:flex-row flex-col justify-evenly items-center font-raleway bg-sky-900 text-white'>
        <div className='flex flex-col justify-start xl:items-start items-start'>
          <img className='' src={whiteLogo} alt=''/>
          <div className='flex justify-between items-center h-2/4 mt-6'>
            <img className='w-2/12' src={fb} alt='link to facebook icon'/>
            <img className='w-2/12' src={insta} alt='link to insta icon'/>
            <img className='w-2/12' src={linkedin} alt='link to linkedin icon'/>
          </div>
        </div>
        <div  className='grid xl:grid-cols-3 xl:grid-rows-7 grid-cols-1 md:grid-cols-3 xl:w-2/4 w-3/4 xl:justify-items-end xl:justify-items-center'>
          <div className='flex flex-col items-start'>
            <h4 className='text-lg font-bold'>Platforma</h4>
            <a className='py-1' href='#'>Creeaza Cont</a>
            <a className='py-1' href='#'>Acceseaza cont</a>
          </div>
          <div className='flex flex-col items-start'>
            <h4 className='text-lg font-bold'>Meniu</h4>
            <a className='py-1' href='#'>Home</a>
            <a className='py-1' href='#'>Despre Noi</a>
            <a className='py-1' href='#'>Cum functioneaza</a>
            <a className='py-1' href='#'>Sfaturi</a>
            <a className='py-1' href='#'>F.A.Q.</a>
            <a className='py-1' href='#'>Contact</a>
          </div>
          <div className='flex flex-col items-start'>
            <h4 className='text-lg font-bold'>Legal</h4>
            <a className='py-1' href='#'>Termene si Conditii</a>
            <a className='py-1' href='#'>Politica Confidentialitate</a>
            <a className='py-1' href='#'>Politica Cookies</a>
            <a className='py-1' href='#'>GDPR</a>
            <a className='py-1' href='#'>ANPC</a>
          </div>
        </div>
    </div>
  )
}

export default Footer