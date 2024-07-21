import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { IoIosMenu } from 'react-icons/io'
export default function Navbar({services, bootcamp, review}) {

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior:'smooth'
    })
  }


  return (
    <nav className='fixed top-0 flex items-center py-6 px-8 md:px-24 justify-between w-full z-40 bg-zinc-50'>
        <div>
            <a href="#default" className="font-bold text-xl uppercase">Purple Academy</a>
        </div>
        <Menu>
      <MenuButton className='bg-purple-700 md:hidden py-2 px-3 text-purple-50 rounded-md'><IoIosMenu /></MenuButton>
      <MenuItems className='bg-zinc-100 shadow-md ring-1 flex w-full flex-col ring-purple-300 p-4 z-50 mt-4 space-y-6 rounded-md ' anchor="bottom">
      
        <MenuItem>
        <span className='cursor-pointer text-purple-800 font-medium' onClick={() => scrollToSection(bootcamp)}>Bootcamp</span>
          
        </MenuItem>
        <MenuItem>
        <span className='cursor-pointer text-purple-800 font-medium' onClick={() => scrollToSection(services)}>Services</span>
         
        </MenuItem>
        <MenuItem>
        <span className='cursor-pointer text-purple-800 font-medium' onClick={() => scrollToSection(review)}>Review</span>
        
        </MenuItem>
        <MenuItem>
        <span className='cursor-pointer bg-purple-600 py-2 px-6 rounded-md font-medium text-purple-50  hover:bg-purple-800 transition-all'>My Learning</span>
        
        </MenuItem>
      </MenuItems>
    </Menu>
        <ul className='md:flex gap-6 items-center hidden'>
          <li className='cursor-pointer text-purple-800 font-medium' onClick={() => scrollToSection(bootcamp)}>Bootcamp</li>
          <li className='cursor-pointer text-purple-800 font-medium' onClick={() => scrollToSection(services)}>Services</li>
          <li className='cursor-pointer text-purple-800 font-medium' onClick={() => scrollToSection(review)}>Review</li>
          <li className='cursor-pointer bg-purple-600 py-2 px-6 rounded-md font-medium text-purple-50  hover:bg-purple-800 transition-all'>My Learning</li>
        </ul>

    </nav>
  )
}
