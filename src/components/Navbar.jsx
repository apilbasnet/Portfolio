import React from 'react'

import { Link } from "react-router-dom"



export default function Navbar({homeRef }) {
    function scrollTop() {
        homeRef.current.scrollIntoView({  behavior: 'smooth' });
    }
    
    
    return (
        <nav className='overflow-hidden  top-0 h-22 flex flex-row justify-between py-2 text-2xl mx-24  '>
                <Link to="#" onClick={scrollTop}>
                    <h1 className='font-bold'>Portfolio</h1>
                </Link>

                <div className='font-bold '>
                    AB.
                </div>
                
                <div>
                    <Link to="#" onClick={scrollTop} className='font-bold'>Contact me</Link>
                </div>
            

        </nav>
    );
}
