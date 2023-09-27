import React from 'react'
import { Link, Element } from 'react-scroll';
import Nav from './components/Nav'
import EmailForm from './components/EmailForm';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';


const App = () => {


  return (
    <div >
      <div className='m-4 sm:mx-16'>
      <Nav />
    <header className='flex gap-2 mt-10 sm:flex-row-reverse sm:justify-between'>
      <img src="/image1.jpg" alt="sonia" className='w-32  sm:w-1/3 rounded-s-2xl sm:rounded-e-3xl sm:rounded-s-none' />
      <div className='grid justify-between'>
      <p className='text-lg sm:text-[32px] sm:leading-snug '>Hello, I'm Sonia Chiburoma </p>
      <span className='text-[24px] font-bold'> Accountant and Animator.</span> 
        
        <Link to="projects" smooth={true} className='text-lg font-semibold bg-[#FDC435] py-1 rounded-lg px-6 w-1/2 text-center'>Projects</Link>
      </div>
    </header>
    <article className='mt-[90px]'>
    <Element name="about">
            <h2 className='text-center text-[32px] font-bold'>About Me</h2>
            </Element>
            <div className='border-2 border-[#FDC435] ml-28 mr-28' ></div>
            <About />
        </article>

        <aside className='mt-[90px]'>
        <Element name="projects">
            <h2 id="work" className='text-center text-[32px] font-bold'>Projects</h2>
            </Element>
            <div className='border-2 border-[#FDC435] ml-32 mr-32' ></div>
            <Projects />
        </aside>
        
        <div className='mt-[90px]'>
        <Element name="contact">
        <h2 id="contact" className='text-center text-[32px] font-bold'>Contact Me</h2>
        <div className='border-2 border-[#FDC435] ml-28 mr-28' ></div>
        </Element>
        <EmailForm />
        <Footer />
    </div>

   













<Link to="home" smooth={true}>
    <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512" className='fixed bottom-4 right-4 z-40 scroll-smooth'><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>
    </Link>
    </div>
    <footer className='w-full'>
      <img src="/Footer.png" alt="vec" />
    </footer>
    </div>
  )
}

export default App
