import Navbar from './components/Navbar'
import { bgHeader,  headerImg} from './assets/image'
import { useRef } from 'react'
import Bootcamp from './components/Bootcamp'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Banner from './components/Banner'
import Footer from './components/Footer'
function App() {
  const bootcamp = useRef(null)
  const services = useRef(null)
  const review = useRef(null)

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior:'smooth'
    })
  }

  return (
    <>
      <Navbar services={services} bootcamp={bootcamp} review={review} />
      <div className='flex flex-col-reverse md:flex-row px-8 md:px-24 md:h-screen mt-12 md:mt-0 pt-20 items-center justify-between bg-zinc-50'>
        <div className='flex flex-col justify-center gap-4 md:gap-4'>
          <h1 className='md:text-5xl text-2xl text-zinc-800 font-extrabold tracking-wider'>Learn New Skill Everywhere</h1>
          <p className='font-normal md:w-2/3'>Empower your future with essential skills anytime, anywhere with our comprehensive courses.</p>
          <div className='mt-2 md:space-x-4 space-y-4 '>
            <button className='bg-purple-600 text-white font-medium w-full md:w-1/4 py-2  rounded-md'>Get Started</button>
            <button onClick={() => scrollToSection(bootcamp)} className='w-full md:w-1/4 border-purple-600 border text-purple-600 font-medium py-2 rounded-md'>Learn More</button>
          </div>
        </div>
        <div className='relative flex-0'>
          <img className='w-64 md:w-full' src={bgHeader} alt="" />
          <img className='absolute bottom-10 left-0 ' src={headerImg} alt="" />
        </div>
      </div>


      <div ref={bootcamp} className='flex py-24 px-8 md:px-24 flex-col gap-12'>
        <Bootcamp />
      </div>


      <div ref={services} className='py-28 flex flex-col justify-center lg:items-center from-zinc-200 to-zinc-100 from-10% bg-gradient-to-t space-y-8 lg:space-y-16'>
       <Services />
      </div>



      <div ref={review} className='flex py-28 px-8 md:px-24 gap-24 flex-col '>
       <Testimonials />
       <Banner />
      </div>


     <Footer />
    </>
  )
}

export default App
