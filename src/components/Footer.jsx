import React from 'react'
import { appstore, playstore } from '../assets/image'
import { FaLocationDot } from 'react-icons/fa6'
import { MdCall } from 'react-icons/md'

const program = [
  {
    title: 'PURPLE Academy',
    link: '',
  },
  {
    title: 'PURPLE Bootcamp',
    link: '',
  },
  {
    title: 'PURPLE Insight',
    link: '',
  },
  {
    title: 'PurpleGO',
    link: '',
  },
]

const course = [
  {
    title: 'PURPLE Academy',
    link: '',
  },
  {
    title: 'PURPLE Bootcamp',
    link: '',
  },
  {
    title: 'PURPLE Insight',
    link: '',
  },
  {
    title: 'PurpleGO',
    link: '',
  },
]



export default function Footer() {
  return (
    <footer className='bg-zinc-200 px-8 md:px-24 py-20'>
      <div className='flex flex-col gap-8 lg:flex-row justify-between'>
        <div className='space-y-8  lg:w-1/3'>
          <h2 className='text-2xl font-bold tracking-wider uppercase'>Purple Academy</h2>
          <h3 className='font-semibold'>PURPLE Office</h3>
          <div className='flex gap-2 items-center'>
            <MdCall className='text-lg' />
            <p>021 397 11642</p>
          </div>
          <div className='flex gap-2'>
            <FaLocationDot className='text-3xl' />
            <p>Promenade 20, Unit L, Jl. Bangka Raya No.20,
              Kec. Mampang Prapatan,
              Daerah Khusus Ibukota Jakarta 12720</p>
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col lg:flex-row gap-3 items-center from-zinc-300 to-zinc-400 bg-gradient-to-tr p-4 rounded-md'>
            <p className='font-medium text-zinc-950'>Download Aplikasi Purple Academy</p>
            <div className='flex  gap-1'>
              <img className='cursor-pointer' src={playstore} alt="" />
              <img className='cursor-pointer' src={appstore} alt="" />
            </div>
          </div>


          <div className='flex item-center justify-between'>
            <div className='space-y-3'>
              <h3 className='font-semibold'>Program PURPLE</h3>
              <ul className='space-y-1'>
                {program.map((p, i) => (
                  <li className='cursor-pointer hover:text-purple-700' key={i + 1}>{p.title}</li>
                ))}
                <li className='cursor-pointer hover:text-purple-700'>More program</li>
              </ul>
            </div>
            <div className='space-y-3'>
              <h3 className='font-semibold'>Course PURPLE</h3>
              <ul className='space-y-1'>
                <li className='cursor-pointer hover:text-purple-700'>UI/UX Design</li>
                <li className='cursor-pointer hover:text-purple-700'>Frontend Engineer</li>
                <li className='cursor-pointer hover:text-purple-700'>Backend Engineer</li>
                <li className='cursor-pointer hover:text-purple-700'>Data Science</li>
                <li className='cursor-pointer hover:text-purple-700'>More course</li>
              </ul>
            </div>
            <div className='space-y-3'>
              <h3 className='font-semibold'>About PURPLE</h3>
              <ul className='space-y-1'>
                <li className='cursor-pointer hover:text-purple-700'>About Us</li>
                <li className='cursor-pointer hover:text-purple-700'>Promo & Discount</li>
                <li className='cursor-pointer hover:text-purple-700'>Privacy & Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col text-center gap-2 md:flex-row justify-between mt-44'>
        <p>©2024 Purple Academy</p>
        <div>
          <span>Find your purpose | Created by  Ini Rizky</span>
        </div>
      </div>
    </footer>
  )
}
