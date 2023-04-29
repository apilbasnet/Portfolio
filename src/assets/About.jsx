import React from 'react'





export default function About() {



  return (
    <div className='   flex flex-col mt-20'>
      <div className='   min-w-screen   bg-black text-white    w-full   border border-red-600'>
        <div className='flex justify-evenly text-center  py-10 lg:max-w-[1140px] lg:mx-auto border font-medium text-xl border-blue-700 '>
          <h2 className='border-red-600 border text-2xl font-semibold'>
            SKILLS
            <p className='text-sm text-left font-medium'>
              I am an enthusiastic learner. 
               Here are couple of languages and tools 
               <div> I've acquired the skills for.</div>
            </p>
          </h2>

          <div className='flex flex-col ' >
            <a href="https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html" target='_blank' rel='noreferrer'>C</a>
            <a href="https://react.dev/" target='_blank' rel='noreferrer'>ReactJS</a>
            <a href="https://tailwindcss.com/" target='_blank' rel='noreferrer'>Tailwind</a>
            
          </div>

          <div className='flex flex-col'>
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target='_blank' rel='noreferrer'>HTML/Css</a>
            <a href="https://code.visualstudio.com/" target='_blank' rel='noreferrer'>VS Code</a>
            <a href="https://www.figma.com/" target='_blank' rel='noreferrer'>Figma</a>


          </div>

          </div>


      </div>
      <div className=' mt-20 mb-10 mx-5 lg:max-w-[1140px] lg:mx-auto  text-2xl font-normal    '>
      <h2 className='   my-9  text-3xl font-bold'>
        ABOUT ME 
      </h2>
        <p >
          Hi, My name is <b>Apil Basnet</b> and I am a  <b>student</b>  and  self-taught <b>Front-end developer from Nepal.</b> I love experimenting on UI/UX and transforming in to such creative websites.
        </p>
        <p>
          <br /> Currently studying <b>Bachelors in Computer Application</b>  through <b> Tribhuwan University. </b> Expecting to graduate in <b>2025.</b>
        </p>
        <p>
          <br />  Aside from coding, I enjoy <b> playing guitars </b> and <b> grinding in competitive FPS shooters.</b>
        </p>



          

        </div>


    </div>
  )
}
