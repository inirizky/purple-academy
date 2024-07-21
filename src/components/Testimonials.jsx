import React from 'react'
import { infinity, bgHeader, certificate, expert, headerImg, img1, learnImg, playstore, testi } from '../assets/image'


export default function Testimonials() {
  return (
    <>
     <div className='flex flex-col md:flex-row md:gap-24 gap-4 justify-between'>
          <div className='space-y-2'>
            <h2 className='text-2xl font-bold tracking-wider'>Testimonials from Alumni</h2>
            <p className='font-normal text-zinc-700'>Hear from our alumni about their experiences and how our courses helped them achieve their goals.</p>
          </div>

          <div className='shadow-md ring-1 ring-purple-100 rounded-md p-6 flex gap-4'>
            <div className='w-20 h-20 overflow-hidden rounded-full flex-shrink-0'>
              <img src={testi} className='object-cover w-full h-full' alt="Regita Cahya" />
            </div>


            <div>
              <h3 className='text-lg font-bold'>Regita Cahya</h3>
              <p className='font-normal text-zinc-500'>"The courses provided me with practical skills and knowledge that have been invaluable in my career."</p>
            </div>
          </div>
        </div>
    </>
  )
}
