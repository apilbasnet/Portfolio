import React from 'react'
import img1 from '/img/cloud.jpg'
import img2 from '/img/flowers.jpg'
import img3 from '/img/moon.jpg'
import img4 from '/img/mountain.jpg'



export default function ProjCard() {
    return (
        <div className='workcontainer  md:mx-5 sm:mx-20 '>
            <h1 className='flex  justify-between project-heading  mb-9 max-w-[1140px] m-auto  text-3xl font-bold '>
            <h2>
            Projects 
            </h2>


            <button className='bg-gray-900 rounded-none border-none box-border text-white cursor-pointer inline-block font-bold text-base  m-3 min-h-11 min-w-10 outline-none overflow-hidden px-10 py-2 relative text-center select-none touch-manipulation hover:opacity-75'> Github</button>

                </h1>
            <div className='proj-container max-w-[1140px] m-auto grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-[25px]   text-sm  '>
                <div className=' col-span-2   flex flex-col overflow-hidden     h-80'>

                    <img src={img1} alt="demo" className='   object-cover w-full h-full ' />

                    <div className=' text-white absolute inset-auto p-10 translate-y-36 lg:max-w-[50%] md:max-w-[70%%] '>
                        <h2 className=' font-semibold text-3xl mb-2'>
                            Demo-1
                        </h2>
                        <p className='mb-2 font-semibold text-xs'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto corporis accusamus quas asperiores commodi voluptatem totam, 
                        </p>
                        <div className='font-medium'>
                            <a href="#">Find out more
                           
                             </a>

                        </div>


                    </div>
                    
                </div>

                <div className='project-card  flex flex-col      overflow-hidden     h-80'>
                    <img src={img2} alt="demo" className='object-cover w-full h-full' />
                    <div className='text-white absolute inset-auto p-10 translate-y-36 lg:max-w-[25%] md:max-w-[70%%] '>
                        <h2 className='font-semibold text-3xl mb-2'>
                            Demo-2
                        </h2>
                        <p className='mb-2 font-semibold text-xs'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod  
                        </p>
                        <div className='font-medium'>
                           <a href="#">
                            Find out more
                           </a>

                        </div>


                    </div>

                </div>
                <div className='project-card  flex flex-col      overflow-hidden     h-80'>
                    <img src={img3} alt="demo" className='object-cover w-full h-full' />
                    <div className='text-white absolute inset-auto p-10 translate-y-36 lg:max-w-[25%] md:max-w-[70%%] '>
                        <h2 className='font-semibold text-3xl mb-2'>
                            Demo-3
                        </h2>
                        <p className='mb-2 font-semibold text-xs'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod  
                        </p>
                        <div className='font-medium'>
                           <a href="#">
                            Find out more
                           </a>

                        </div>


                    </div>

                </div>

                <div className=' col-span-2   flex flex-col overflow-hidden     h-80'>

                    <img src={img4} alt="demo" className='   object-cover w-full h-full ' />

                    <div className=' text-white absolute inset-auto p-10 translate-y-36 lg:max-w-[50%] md:max-w-[70%%] '>
                        <h2 className=' font-semibold text-3xl mb-2'>
                            Demo-4
                        </h2>
                        <p className='mb-2 font-semibold text-xs'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto corporis accusamus quas asperiores commodi voluptatem totam, 
                        </p>
                        <div className='font-medium'>
                            <a href="#">Find out more
                           
                             </a>

                        </div>


                    </div>
                    
                </div>

                

                
                

                
                

            </div>



        </div>
    )
}

