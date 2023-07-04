import { Fragment, useRef, useState } from 'react'
import './index.css'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'







function App() {
  const homeRef = useRef(null);

  return (

    <main className=' overflow-hidden font-montserrat  bg-slate-50 '>

      <div className='     scroll-smooth overflow-y-hidden overflow-x-hidden ' >

        <Home homeRef={homeRef} />
        <Project />
        <About />
        <Contact />



        <Navbar homeRef={homeRef} />
      </div>
    </main>
  )
}

export default App
