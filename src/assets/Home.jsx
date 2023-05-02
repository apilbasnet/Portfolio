import React from 'react'


export default function home() {


  return (
    <>
      <div className='      h-[calc(100vh-50px)] snap-center flex items-center mx-2 lg:max-w-[1140px] lg:mx-auto'>
        <h1 className='text-8xl  font-semibold' >
          Apil
          <h1>
            Basnet
          </h1>

          <p className='text-5xl'>
            Frontend Developer

            <div>
              <button className='bg-gray-900 rounded-none border-none box-border text-white cursor-pointer inline-block font-bold text-base  m-3 min-h-11 min-w-10 outline-none overflow-hidden px-5 py-2 relative text-center select-none touch-manipulation hover:opacity-75'>  About me</button>
              <button className='bg-gray-900 rounded-none border-none box-border text-white cursor-pointer inline-block font-bold text-base  m-0 min-h-11 min-w-10 outline-none overflow-hidden px-5 py-2 relative text-center select-none touch-manipulation hover:opacity-75'>Hire me </button>
            </div>
          </p>

        </h1>
      </div>

      <div className='bg-gradient-to-r  from-blue-500 to-cyan-500  text-white    min-w-screen  flex flex-row  mb-14  '>
        <div className='  flex-row lg:flex md:flex justify-between  items-center  py-10  mx-2 lg:max-w-[1140px] lg:mx-auto  w-[1140px] font-medium text-lg  '>

        <div className='text-left'>
          I like to think creatively and make simple, clear<br />and usable UI/UX for easier navigation.  
        </div>

        <div>
        <button className=' mx-6 bg-slate-50 rounded-none border-none box-border text-gray-900 cursor-pointer inline-block font-bold text-base  m-3 min-h-11 min-w-10 outline-none overflow-hidden px-5 py-2 relative text-center select-none touch-manipulation hover:opacity-75'>Resume</button>


        </div>

        </div>
      </div>



    </>



  )
}
