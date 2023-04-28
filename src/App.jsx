import { Fragment, useRef, useState } from 'react'
import './index.css'
import Home from './assets/Home'
import About from './assets/About'
import Project from './assets/Project'
import Contact from './assets/Contact'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './components/navbar'
import Footer from './components/Footer'




function App() {
  const homeRef = useRef(null);





  return (

    <main className='h-screen overflow-hidden font-montserrat   '>
      <Navbar homeRef={homeRef} />

      <div className='overflow-y-auto h-screen  scroll-smooth overflow-x-hidden scrollbar-hide' style={{ scrollSnapType: 'y mandatory' }}>

        <Home homeRef={homeRef} />
        <Project />
        <About />
        <Contact />



      </div>
    </main>
  )
}

export default App
