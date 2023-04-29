import React from 'react'
import Footer from '../components/Footer'



export default function Contact() {

  return (
    <div className=' flex flex-col  snap-center bg-zinc-900  ' >

      <div className=' flex flex-col text-slate-100  py-16 text-2xl max-w-[1140px] m-auto   '>
        <div className='flex flex-col w-1/2 m-2 px-4 justify-center '>
          Contact  <br />
          Interested in working together? Let's connect via email or LinkedIn
        </div>

        <div className='flex flex-row w-12/12 my-2 px-4 '>
          <form className='flex flex-col w-1/2 ' >

            <input placeholder='Name' className=' mb-[1rem] py-[5px] px-[10px] bg-neutral-800 text-[1.2rem] text-slate-50' />

            <input placeholder='Email' className='mb-[1rem] py-[5px] px-[10px] bg-neutral-800 text-[1.2rem] text-slate-50' />

            <input placeholder='Subject' className='mb-[1rem] py-[5px] px-[10px] bg-neutral-800 text-[1.2rem] text-slate-50' />
          </form>


          <form className='flex flex-col mx-2 w-1/2 ' >
            <textarea className='   px-[10px] bg-neutral-800 text-[1.2rem] text-slate-50' placeholder='Message' rows="5"></textarea>
          </form>

        </div>
        <div className=' flex flex-row-reverse'>
          <button className=' mx-6 bg-slate-50 rounded-none border-none box-border text-gray-900 cursor-pointer inline-block font-bold text-base  m-3 min-h-11 min-w-10 outline-none overflow-hidden px-5 py-2 relative text-center select-none touch-manipulation hover:opacity-75'>Submit</button>

        </div>





      </div>



      <Footer />
    </div>
  )
}
