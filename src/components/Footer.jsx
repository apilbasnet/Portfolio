import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Footer() {
    const emailAddress = "apilbasnet10@gmail.com"
    return (
        <div className='flex justify-center items-end min-w-screen  m-0 bg-black text-white py-16'>
            <div className='flex   justify-center mx-5 lg:max-w-[1140px] lg:mx-auto'>


                <div className=' flex flex-col  text-xl items-center    '>
                    <h2 className='font-light flex-col  text-center text-sm '>
                        Let's  Connect
                    </h2>
                    <p className='font-extrabold text-5xl  '>
                        AB. 

                    </p>
                    <div className='text-base font-normal'>
                        Built by Apil Basnet with <br />
                        ReactJs and Tailwind
                    </div>
                </div>

                <div className=' flex flex-col items-center  font-bold'>
                    <h2 className='font-light text-center text-sm '>
                        Connect  with me <br />
                    </h2>
                    <div>
                        <NavLink to="https://github.com/apilbasnet" target='_blank'>Github</NavLink>
                    </div>
                    <div>
                        <NavLink to="https://www.linkedin.com/in/apil-basnet-215492156/" target='_blank' >LinkedIn</NavLink>

                    </div>
                    <div>

                        <a href={`mailto:${emailAddress}`} rel="noopener noreferrer" target='_blank'>E-Mail   </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
