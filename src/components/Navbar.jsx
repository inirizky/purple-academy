import React from 'react'

export default function Navbar({services, bootcamp, review}) {

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior:'smooth'
    })
  }


  return (
    <nav className='fixed top-0 flex shadow-md py-6 px-8 md:px-24 justify-between w-full z-40 bg-slate-100'>
        <div>
            <a href="#default" className="font-bold uppercase">Citayem Class</a>
        </div>
        <ul className='flex gap-4'>
          <li className='cursor-pointer hover:text-purple-600' onClick={() => scrollToSection(bootcamp)}>Bootcamp</li>
          <li className='cursor-pointer hover:text-purple-600' onClick={() => scrollToSection(services)}>Services</li>
          <li className='cursor-pointer hover:text-purple-600' onClick={() => scrollToSection(review)}>Review</li>
        </ul>
    </nav>
  )
}
