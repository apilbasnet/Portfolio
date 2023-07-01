import React from 'react'
import { useScroll, animate } from 'framer-motion'

import { Link } from "react-router-dom"


export default function Navbar() {
    const { scrollY } = useScroll();


    function scrollTop() {
        window.scrollTo(document.body.scrollHeight, 0)
    }

    function scrollBot() {
        window.scrollTo(0, document.body.scrollHeight)
    }






    return (
        <nav className='  top-[0] h-[50px] flex flex-row items-center justify-between  text-2xl     fixed w-full transition duration-300 lg:px-14 bg-zinc-900 text-white '>
            <Link to="#" onClick={scrollTop}>
                <h1 className='font-bold'>Portfolio</h1>
            </Link>

            <div className='font-bold '>
                AB.
            </div>

            <div className='flex border '>
                <Link to="#" onClick={scrollBot} className='  bg-slate-50 rounded-none border-none box-border text-gray-900 cursor-pointer inline-block font-bold text-base   min-w-10 outline-none overflow-hidden px-5 py-1 relative text-center select-none touch-manipulation hover:opacity-75 '  >Contact me</Link>

            </div>


        </nav>
    );
}