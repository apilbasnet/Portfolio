import React from 'react'

import { Link } from "react-router-dom"


export default function Navbar({homeRef }) {
    function scrollTop() {
        homeRef.current.scrollIntoView({  behavior: 'smooth' });
    }
    
    
    return (
        <nav className='  top-0 h-[50px] flex flex-row items-center justify-between  text-2xl   mx-5 lg:max-w-[1280px] lg:mx-auto'>
                <Link to="#" onClick={scrollTop}>
                    <h1 className='font-bold'>Portfolio</h1>
                </Link>

                <div className='font-bold '>
                    AB.
                </div>
                
                <div className='flex border '>
                    <Link to="#" onClick={scrollTop} className='  bg-gray-900 rounded-none border-none box-border text-white cursor-pointer inline-block font-bold text-base   min-w-10 outline-none overflow-hidden px-5 py-1 relative text-center select-none touch-manipulation hover:opacity-75 '  >Contact me</Link>
                    
                </div>
            

        </nav>
    );
}