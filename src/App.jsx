import { Fragment, useRef, useState } from 'react'
import './index.css'
import Home from './assets/Home'
import About from './assets/About'
import Project from './assets/Project'
import Contact from './assets/Contact'
import Navbar from './components/Navbar'







function App() {
  const homeRef = useRef(null);





  return (

    <main className=' overflow-hidden font-montserrat   '>
      <Navbar homeRef={homeRef} />

      <div className='     scroll-smooth overflow-y-hidden overflow-x-hidden ' >

        <Home homeRef={homeRef} />
        <Project />
        <About />
        <Contact />



      </div>
    </main>
  )
}

export default App
