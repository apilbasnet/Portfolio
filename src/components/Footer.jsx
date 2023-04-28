import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Footer() {
    const emailAddress = "apilbasnet10@gmail.com"
    return (
        <div className='flex justify-center items-end min-w-screen  m-0 bg-black text-white p-20'>
            <div className='flex   text-xl items-center mx-32 '>
                <div className='font-medium flex-col mx-10 text-center'>
                    Let's Connect
                    <p className='font-extrabold text-5xl  '>
                        AB. <br />

                        <div className='text-base font-normal'>
                            Built by Apil Basnet with <br />
                            ReactJs and Tailwind
                        </div>
                    </p>
                </div>

                <div className='font-medium text-center mx-10'>
                    Connect with me <br />
                    <div>
                        <NavLink to="https://github.com/apilbasnet" target='_blank'>Github</NavLink>
                        <div>
                            <NavLink to="https://www.linkedin.com/in/apil-basnet-215492156/" target='_blank' >LinkedIn</NavLink>

                            <div>

                                <a href={`mailto:${emailAddress}`} rel="noopener noreferrer" target='_blank'>E-Mail   </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
