import React from 'react'
import logo from '../images/logo.svg'
import whiteLogo from '../images/whiteLogo.svg'
import { NavLink } from 'react-router-dom';
import useToggle from '../components/useToggleState'

function Navigation() {
    const [isOpen, setIsOpen] = useToggle(false)

    const navLinkStyles = ({isActive}) => {
        return {
            fontWeight: isActive ? 'bold' : 'regular',
        }
    }

  return (
    <nav className=' sticky top-0 bg-white mx-auto flex flex-row lg:justify-evenly justify-around py-5 items-center z-40'>
        <div className='z-30 w-1/4'>
            <img src={isOpen? whiteLogo : logo} alt='logo'/>
        </div>
            <ul className='lg:flex lg:justify-evenly items-center hidden xl:w-3/5 lg:w-9/12 font-raleway text-regal-blue'>
                <li className='hover:scale-x-105'>
                    <NavLink to='/' style={navLinkStyles}>HOME</NavLink> 
                </li>
                <li className='hover:font-bold'>
                    <a href='#'>DESPRE NOI</a> 
                </li>
                <li className='hover:font-bold'>
                    <a href='#'>CUM FUNCTIONEAZA</a>              
                </li>
                <li className='hover:font-bold'>
                    <a href='#'>SFATURI</a> 
                </li>
                <li className='hover:font-bold'>
                    <a href='#'>F.A.Q.</a> 
                </li>
                <li className='hover:font-bold'>
                    <a href='#'>CONTACT</a> 
                </li>
                <li className='bg-peach hover:bg-orange-500 py-2 px-12 rounded-full text-white drop-shadow-md'>
                    <a href='#'><button>LOG IN</button></a> 
                </li>
            </ul>
        <div className='lg:hidden z-30'>
            <button onClick={setIsOpen} className={isOpen ? 'text-white border border-white-5 px-2 py-1' : 'text-black border border-black-5 px-2 py-1'}>MENU</button>
        </div>
        <div className={isOpen ? 'flex bg-orange-400 absolute top-0  w-screen h-screen z-20 animate-fade-in-down items-center justify-center' : 'hidden'}>
        <ul className='flex flex-col items-center justify-evenly font-raleway text-white h-3/5 mt-20'>
                <li>
                    <NavLink to='/' style={navLinkStyles}>HOME</NavLink> 
                </li>
                <li>
                    <a href='#'>DESPRE NOI</a> 
                </li>
                <li>
                    <a href='#'>CUM FUNCTIONEAZA</a>              
                </li>
                <li>
                    <a href='#'>SFATURI</a> 
                </li>
                <li>
                    <a href='#'>F.A.Q.</a> 
                </li>
                <li>
                    <a href='#'>CONTACT</a> 
                </li>
                <li className='bg-orange-300 py-2 px-12 rounded-full text-white drop-shadow-md'>
                    <a href='#'><button>LOG IN</button></a> 
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navigation