import { useState } from 'react'
import Navbar from './components/Navbar'
import { infinity, bgHeader, certificate, expert, headerImg, img1, learnImg, playstore, testi } from './assets/image'
import Services from './components/Services'
import { useRef } from 'react'
function App() {
  const bootcamp = useRef(null)
  const services = useRef(null)
  const review = useRef(null)



  return (
    <>
      <Navbar services={services} bootcamp={bootcamp} review={review} />
      <div className='flex flex-col-reverse md:flex-row px-8 md:px-24 h-screen pt-20 items-center justify-between'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-5xl font-extrabold tracking-wider'>Learn New Skill Everywhere</h1>
          <p className='font-normal w-2/3'>Empower your future with essential skills anytime, anywhere with our comprehensive courses.</p>
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
          <p className='font-normal text-zinc-700'>Discover a variety of high-quality courses designed to enhance your tech skills.</p>

        </div>
        <Services />



      </div>


      <div ref={services} className='md:py-28 py-16 p-8 flex flex-col justify-center items-center from-purple-200 to-purple-100 from-10% bg-gradient-to-t space-y-8 md:space-y-16'>
  <div className='space-y-4 text-center w-1/2'>
    <h2 className='text-3xl font-bold tracking-wider text-zinc-900'>Why Choose Purple Academy?</h2>
    <p className='font-medium text-zinc-700'>Explore our unique approach to learning and discover why we're the best choice for your educational journey.</p>
  </div>

  <div className='flex justify-between flex-col md:flex-row gap-8 md:space-y-0 space-y-8 md:px-24'>
    <div className='flex flex-col md:flex-row items-center gap-4 md:basis-1/3 text-zinc-900 w-full'>
      <img src={expert} className='w-20 h-20 bg-blue-700 rounded-full p-4' alt="Expert" />
      <div className='space-y-1 text-center md:text-start'>
        <h3 className='text-xl font-medium'>Learn from Experts</h3>
        <p className='text-sm'>Gain insights and knowledge from industry professionals with years of experience in their fields.</p>
      </div>
    </div>

    <div className='flex flex-col md:flex-row items-center gap-4 md:basis-1/3 text-zinc-900 w-full'>
      <img src={certificate} className='w-20 h-20 bg-blue-700 rounded-full p-4' alt="Certificate" />
      <div className='space-y-1 text-center md:text-start'>
        <h3 className='text-xl font-medium'>Get Certified</h3>
        <p className='text-sm'>Receive a recognized certification upon completion to boost your career and validate your skills.</p>
      </div>
    </div>

    <div className='flex flex-col md:flex-row items-center gap-4 md:basis-1/3 text-zinc-900 w-full'>
      <img src={infinity} className='w-20 h-20 bg-blue-700 rounded-full p-4' alt="Flexible Learning" />
      <div className='space-y-1 text-center md:text-start'>
        <h3 className='text-xl font-medium'>Flexible Learning</h3>
        <p className='text-sm'>Access courses anytime, anywhere with our flexible learning options tailored to fit your schedule.</p>
      </div>
    </div>

  </div>
</div>



<div ref={review} className='flex py-28 px-8 md:px-24 gap-12 md:gap-24 flex-col'>
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





  <div className='from-purple-700 to-purple-600 bg-gradient-to-t p-4 md:p-8 flex flex-col md:flex-row gap-4 md:gap-12 text-white font-medium rounded-md'>
  <img src={learnImg} className='w-96 rounded-md' alt="Study and Grow" />
  <div className='space-y-2 md:space-y-6 md:p-6'>
    <h2 className='text-2xl md:text-3xl font-bold'>Let's Study and Grow!</h2>
    <p className='font-normal text-zinc-100'>Join us to enhance your skills and reach new heights with our comprehensive learning programs.</p>
    <button className='bg-yellow-500 text-black font-medium py-2 w-full md:w-1/2 rounded-md'>Get Started</button>
  </div>
</div>

      </div>


      <footer className='bg-purple-200 px-24 py-20'>
        <div className='flex justify-between'>
          <div className='space-y-4 w-1/3'>
            <h2 className='text-2xl font-bold tracking-wider uppercase'>Purple Academy</h2>
            <h3 className='font-semibold'>PURPLE Office</h3>
            <p>021 397 11642</p>
            <p>Promenade 20, Unit L, Jl. Bangka Raya No.20,
              Kec. Mampang Prapatan,
              Daerah Khusus Ibukota Jakarta 12720</p>
          </div>

          <div className='flex flex-col gap-6'>
            <div className='flex gap-2 items-center from-purple-300 to-purple-400 bg-gradient-to-tr p-4 rounded-md'>
              <p>Download Aplikasi Purple Academy</p>
              <div className='flex gap-2'>
                <img src={playstore} alt="" />
                <img src={playstore} alt="" />
              </div>
            </div>
            <div className='flex item-center justify-between'>
              <div className='space-y-2'>
                <h3 className='font-semibold'>Bootcamp PURPLE</h3>
                <ul className='space-y-1'>
                  <li>UI/UX Design</li>
                  <li>Frontend Engineer</li>
                  <li>Backend Engineer</li>
                  <li>Digital Marketing</li>
                  <li>Data Science</li>
                </ul>
              </div>
              <div className='space-y-2'>
                <h3 className='font-semibold'>Course PURPLE</h3>
                <ul className='space-y-1'>
                  <li>UI/UX Design</li>
                  <li>Frontend Engineer</li>
                  <li>Backend Engineer</li>
                  <li>Digital Marketing</li>
                  <li>Data Science</li>
                </ul>
              </div>
              <div className='space-y-2'>
                <h3 className='font-semibold'>About PURPLE</h3>
                <ul className='space-y-1'>
                  <li>About Us</li>
                  <li>Literasi</li>
                  <li>P</li>
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
