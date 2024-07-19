import { useState } from 'react'
import Navbar from './components/Navbar'
import { appstore, bgHeader, headerImg, img1, learnImg, playstore } from './assets/image'
import Services from './components/Services'
import { useRef } from 'react'
function App() {
  const bootcamp = useRef(null)
  const services = useRef(null)
  const review = useRef(null)



  return (
    <>
      <Navbar services={services} bootcamp={bootcamp} review={review} />
      <div className='flex flex-col-reverse md:flex-row px-8 md:px-24 pt-32 items-center justify-between'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-5xl font-extrabold tracking-wider'>Learn New Skill Everywhere</h1>
          <p className='font-normal w-2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, corporis!</p>
          <div className='space-x-4'>
            <button className='bg-purple-600 text-white font-medium py-2 px-8 rounded-md'>Get Started</button>
            <button className='border-purple-600 border text-purple-600 font-medium py-2 px-8 rounded-md'>Learn More</button>
          </div>
        </div>
        <div className='relative flex-0'>
          <img className='w-48 md:w-full' src={bgHeader} alt="" />
          <img className='absolute bottom-10 left-0 ' src={headerImg} alt="" />
        </div>
      </div>


      <div ref={bootcamp} className='flex py-24 px-8 md:px-24 flex-col gap-12'>
        <div className='flex flex-col text-center  gap-2'>
          <h2 className='text-2xl font-bold tracking-wider'>Explore Course</h2>
          <p className='font-normal text-zinc-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, corporis!</p>
        </div>
        <Services />



      </div>


      <div ref={services} className='md:py-32 py-16 p-8 flex flex-col justify-center items-center bg-purple-700 space-y-8 md:space-y-16'>
        <div className='space-y-2 text-center '>
          <h2 className='text-2xl font-bold tracking-wider text-zinc-100'>Why Choose Citayem Class?</h2>
          <p className='font-normal text-zinc-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, corporis!</p>
        </div>


        <div className='flex justify-between flex-col md:flex-row gap-8 md:space-y-0 space-y-8 md:px-24'>
          <div className='flex flex-col md:flex-row   items-center gap-4 md:basis-1/3 text-white w-full'>
            <img src={img1} className='w-20 h-20 bg-blue-800 rounded-full p-2' alt="" />
            <div className='space-y-2 text-center  md:text-start'>
              <h3 className='text-xl font-medium'>Learn from Expert</h3>
              <p className='text-sm'>Lorem ipsum dolor sit amet amet belalang kupu kupu saing makan nasi </p>
            </div>
          </div>

          <div className='flex flex-col md:flex-row items-center gap-4 md:basis-1/3 text-white w-full'>
            <img src={img1} className='w-20 h-20 bg-blue-800 rounded-full p-2' alt="" />
            <div className='space-y-2 text-center md:text-start '>
              <h3 className='text-xl font-medium'>Learn from Expert</h3>
              <p className='text-sm'>Lorem ipsum dolor sit amet amet belalang kupu kupu saing makan nasi </p>
            </div>
          </div>

          <div className='flex flex-col md:flex-row items-center gap-4 md:basis-1/3 text-white w-full'>
            <img src={img1} className='w-20 h-20 bg-blue-800 rounded-full p-2' alt="" />
            <div className='space-y-2 text-center md:text-start '>
              <h3 className='text-xl font-medium'>Learn from Expert</h3>
              <p className='text-sm'>Lorem ipsum dolor sit amet amet belalang kupu kupu saing makan nasi </p>
            </div>
          </div>

        </div>
      </div>


      <div ref={review} className='flex py-28 px-8 md:px-24 gap-12 md:gap-24 flex-col'>
        <div className='flex flex-col md:flex-row md:gap-24 gap-4 justify-between'>
          <div className='space-y-2'>
            <h2 className='text-2xl font-bold tracking-wider'>Testimoni From Alumni</h2>
            <p className='font-normal text-zinc-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, corporis!</p>
          </div>
          <div className='shadow-lg rounded-md p-8 flex gap-4'>
            <img src={img1} className='w-16 h-16 bg-blue-800 rounded-full p-2' alt="" />
            <div>
              <h3 className='text-lg font-bold'>Regita Cahya</h3>
              <p className='font-normal text-zinc-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium molestiae nisi aliquid!</p>
            </div>

          </div>
        </div>



        <div className='bg-purple-600 p-4 md:p-8 flex flex-col md:flex-row gap-4 md:gap-12 text-white  font-medium rounded-md'>
          <img src={learnImg} className='w-96 rounded-md' alt="" />
          <div className='space-y-2 md:space-y-6 md:p-6'>
            <h2 className='text-2xl md:text-3xl font-bold'>Let's study and growing up!</h2>
            <p className='font-normal text-zinc-100'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium molestiae nisi aliquid!</p>
            <button className='bg-yellow-500 text-black font-medium py-2 w-full md:w-1/2 rounded-md'>Get Started</button>
          </div>
        </div>
      </div>


      <footer className='bg-purple-200 px-24 py-20'>
        <div className='flex justify-between'>
          <div className='space-y-4 w-1/3'>
            <h2 className='text-2xl font-bold tracking-wider uppercase'>Citayem Class</h2>
            <h3 className='font-semibold'>CITAYEM Office</h3>
            <p>021 397 11642</p>
            <p>Promenade 20, Unit L, Jl. Bangka Raya No.20,
              Kec. Mampang Prapatan,
              Daerah Khusus Ibukota Jakarta 12720</p>
          </div>

          <div className='flex flex-col gap-6'>
            <div className='flex gap-2 items-center bg-zinc-300 p-4 rounded-md'>
              <p>Download Aplikasi Citayem Class</p>
              <div className='flex gap-2'>
                <img src={playstore} alt="" />
                <img src={playstore} alt="" />
              </div>
            </div>
            <div className='flex item-center gap-8'>
              <div className='space-y-2'>
                <h3 className='font-semibold'>Bootcamp CITAYEM</h3>
                <ul className='space-y-1'>
                  <li>UI/UX Design</li>
                  <li>Frontend Engineer</li>
                  <li>Backend Engineer</li>
                  <li>Digital Marketing</li>
                  <li>Data Science</li>
                </ul>
              </div>
              <div className='space-y-2'>
                <h3 className='font-semibold'>Bootcamp CITAYEM</h3>
                <ul className='space-y-1'>
                  <li>UI/UX Design</li>
                  <li>Frontend Engineer</li>
                  <li>Backend Engineer</li>
                  <li>Digital Marketing</li>
                  <li>Data Science</li>
                </ul>
              </div>
              <div className='space-y-2'>
                <h3 className='font-semibold'>Bootcamp CITAYEM</h3>
                <ul className='space-y-1'>
                  <li>UI/UX Design</li>
                  <li>Frontend Engineer</li>
                  <li>Backend Engineer</li>
                  <li>Digital Marketing</li>
                  <li>Data Science</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-between mt-44'>
          <p>© 2016 - 2024, PT. Lentera Bangsa Benderang</p>
          <div>
          <span>Ikuti kami dan dapatkan info menarik!</span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
