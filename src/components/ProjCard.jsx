import React from 'react'
import img from '/img/demo.png'
import { NavLink } from 'react-router-dom'



export default function ProjCard() {
    return (
        <div className='workcontainer '>
            <h1 className='project-heading text-center  text-2xl font-bold mb-1'>Projects </h1>
            <div className='proj-container max-w-[1140px] m-auto grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-[25px]   text-sm text-center'>
                <div className='project-card  flex flex-col    '>

                    <img src={img} alt="demo" className=' h-52    ' />

                    <h2 className='pro-title font-semibold '>
                        Demo-1
                    </h2>
                    <div className='proj-details'>
                        <p>
                            This is a description of the Demo-1.
                        </p>
                        <div className='proj-btn'>
                            <NavLink to="url.com" className='bg-gray-900 rounded-none border-none box-border text-white cursor-pointer inline-block font-bold text-base  m-3 min-h-11 min-w-10 outline-none overflow-hidden px-5 py-2 relative text-center select-none touch-manipulation hover:opacity-75 w-28'>View</NavLink>
                            <NavLink to="url.com" className='bg-gray-900 rounded-none border-none box-border text-white cursor-pointer inline-block font-bold text-base  m-3 min-h-11 min-w-10 outline-none overflow-hidden px-5 py-2 relative text-center select-none touch-manipulation hover:opacity-75 w-28'>Source</NavLink>

                        </div>


                    </div>

                </div>

                <div className='project-card  flex flex-col'>
                    <img src={img} alt="demo" className='h-52' />
                    <h2 className='pro-title font-semibold'>
                        Demo-2
                    </h2>
                    <div className='proj-details'>
                        <p>
                            This is a description of the Demo-2.
                        </p>
                        <div className='proj-btn'>
                            <NavLink to="url.com" className='bg-gray-900 rounded-none border-none box-border text-white cursor-pointer inline-block font-bold text-base  m-3 min-h-11 min-w-10 outline-none overflow-hidden px-5 py-2 relative text-center select-none touch-manipulation hover:opacity-75 w-28'>View</NavLink>
                            <NavLink to="url.com" className='bg-gray-900 rounded-none border-none box-border text-white cursor-pointer inline-block font-bold text-base  m-3 min-h-11 min-w-10 outline-none overflow-hidden px-5 py-2 relative text-center select-none touch-manipulation hover:opacity-75 w-28'>Source</NavLink>

                        </div>


                    </div>

                </div>
                <div className='project-card  flex flex-col'>
                    <img src={img} alt="demo" className='h-52' />
                    <h2 className='pro-title font-semibold'>
                        Demo-3
                    </h2>
                    <div className='proj-details'>
                        <p>
                            This is a description of the Demo-3.
                        </p>
                        <div className='proj-btn'>
                            <NavLink to="url.com" className='bg-gray-900 rounded-none border-none box-border text-white cursor-pointer inline-block font-bold text-base  m-3 min-h-11 min-w-10 outline-none overflow-hidden px-5 py-2 relative text-center select-none touch-manipulation hover:opacity-75 w-28'>View</NavLink>
                            <NavLink to="url.com" className='bg-gray-900 rounded-none border-none box-border text-white cursor-pointer inline-block font-bold text-base  m-3 min-h-11 min-w-10 outline-none overflow-hidden px-5 py-2 relative text-center select-none touch-manipulation hover:opacity-75 w-28'>Source</NavLink>

                        </div>


                    </div>

                </div>
                <div className='project-card  flex flex-col  '>
                    <img src={img} alt="demo" className='h-52' />
                    <h2 className='pro-title font-semibold'>
                        Demo-4
                    </h2>
                    <div className='proj-details'>
                        <p>
                            This is a description of the Demo-4.
                        </p>
                        <div className='proj-btn'>
                            <NavLink to="url.com" className='bg-gray-900 rounded-none border-none box-border text-white cursor-pointer inline-block font-bold text-base  m-3 min-h-11 min-w-10 outline-none overflow-hidden px-5 py-2 relative text-center select-none touch-manipulation hover:opacity-75 w-28'>View</NavLink>
                            <NavLink to="url.com" className='bg-gray-900 rounded-none border-none box-border text-white cursor-pointer inline-block font-bold text-base  m-3 min-h-11 min-w-10 outline-none overflow-hidden px-5 py-2 relative text-center select-none touch-manipulation hover:opacity-75 w-28'>Source</NavLink>

                        </div>


                    </div>

                </div>

            </div>



        </div>
    )
}

