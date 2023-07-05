import { React, useEffect, useState } from 'react'
import { Projects } from '../utils/config'
import { Link } from 'react-router-dom'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'



export default function ProjCard(props) {


    const { ref, inView } = useInView();
    const animation = useAnimation();
    const [selectedId, setSelectedId] = useState(null)


    const items = [

    ]



    useEffect(() => {
        console.log("inView = ", inView);
        if (inView) {
            animation.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 1, bounce: 0.3
                }
            })
        }

        if (!inView) {
            animation.start({ x: '-100vw' })
        }

    }, [inView]);

    return (
        <div ref={ref} className='workcontainer  md:mx-5 sm:mx-20 '>
            <h1 className='flex  justify-between items-center project-heading  mb-9 max-w-[1140px] m-auto  text-3xl font-bold '>
                <h2>
                    Projects
                </h2>

                <Link to="https://github.com/apilbasnet" target='blank' >
                    <button className='bg-gray-900 rounded-none border-none box-border text-white cursor-pointer inline-block font-bold text-base  m-3 min-h-11 min-w-10 outline-none overflow-hidden px-10 py-2 relative text-center select-none touch-manipulation hover:opacity-75'> Github</button>
                </Link>

            </h1>




            <motion.div className=' proj-container max-w-[1140px] m-auto grid grid-cols-1  lg:grid-cols-3   gap-[25px]   text-sm  '
                animate={animation}
            >
                <div className='  lg:col-span-2   flex flex-col overflow-hidden     h-80'>

                    <img src={Projects[0].img} alt="demo" className='blur-sm   object-cover w-full h-full ' />

                    <div className=' text-white absolute inset-auto p-10 translate-y-36 lg:max-w-[50%] md:max-w-[70%%] '>
                        <h2 className=' font-semibold text-3xl mb-2'>
                            {Projects[0].name}
                        </h2>
                        <p className='mb-2 font-semibold text-xs'>
                            {Projects[0].description}
                        </p>
                        <div className='font-medium'>
                            <a href={` ${Projects[0].link} ` } target='_blank' rel="noreferrer">Find out more

                            </a>

                        </div>


                    </div>

                </div>

                <div className='project-card  flex flex-col      overflow-hidden     h-80'>
                    <img src={Projects[1].img} alt="demo" className='object-cover blur-sm w-full h-full' />
                    <div className='text-white absolute inset-auto p-10 translate-y-36 lg:max-w-[25%] md:max-w-[70%%] '>
                        <h2 className='font-semibold text-3xl mb-2'>
                            {Projects[1].name}
                        </h2>
                        <p className='mb-2 font-semibold text-xs'>
                            {Projects[1].description}
                        </p>
                        <div className='font-medium'>
                            <a href={` ${Projects[1].link} `} target='_blank' rel="noreferrer">Find out more

                            </a>

                        </div>


                    </div>

                </div>
                <div className='project-card  flex flex-col      overflow-hidden     h-80'>
                    <img src={Projects[2].img} alt="demo" className=' blur-sm object-cover w-full h-full' />
                    <div className='text-white absolute inset-auto p-10 translate-y-36 lg:max-w-[25%] md:max-w-[70%%] '>
                        <h2 className='font-semibold text-3xl mb-2'>
                            {Projects[2].name}
                        </h2>
                        <p className='mb-2 font-semibold text-xs'>
                            {Projects[2].description}                        </p>
                        <div className='font-medium'>
                            <a href={` ${Projects[2].link} `} target='_blank' rel="noreferrer">Find out more

                            </a>

                        </div>


                    </div>

                </div>

                <div className=' lg:col-span-2   flex flex-col overflow-hidden     h-80'>

                    <img src={Projects[3].img} alt="demo" className='blur-sm   object-cover w-full h-full ' />

                    <div className=' text-white absolute inset-auto p-10 translate-y-36 lg:max-w-[50%] md:max-w-[70%%] '>
                        <h2 className=' font-semibold text-3xl mb-2'>
                        {Projects[3].name}
                        </h2>
                        <p className='mb-2 font-semibold text-xs'>
                        {Projects[3].description}  
                       </p>
                        <div className='font-medium'>
                        <a href={` ${Projects[3].link} `} target='_blank' rel="noreferrer">Find out more

</a>

                        </div>


                    </div>

                </div>









            </motion.div>



        </div>
    )
}

