import React,{useEffect, useRef, useState} from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import {motion,useInView} from 'framer-motion'

const Testimonial = () => {
    const [show, setshow] = useState(false)
    const ref = useRef(null)
    const isInView = useInView(ref)
    const slide={
        hidden:{
          x:-40,
          opacity:0
        },
        show:{
          x:0,
          opacity:1,
          transition:{
            type:'tween',
            duration:0.4,
            delay:0.2,
            stiffness:400,
          }
        }
       
      }
      useEffect(()=>{
        if(isInView){
          setshow(true)
        }
},[isInView])
 
  return (
    <div className='py-28 bg-metal min-h-80 flex justify-center text-green' ref={ref}>
        {show&&<motion.div variants={slide} initial='hidden' animate='show' className=' w-[100%] sm:w-[80%] xl:w-[60%] 2xl:w-[40%] flex flex-col items-center'> 
            <h1 className=' text-5xl sm:text-6xl font-bold font-Black mb-20'>Testimonial</h1>
            <div className=' flex w-full mb-20 '>
                <div className=' flex flex-col items-center justify-between w-[20%] sm:w-[10%]'>
                <div>
                    <div className=' w-10 h-10 flex justify-center items-center bg-midnight rounded-full'>
                <FaQuoteLeft />
                </div>
                </div>
                <div className=' h-full w-1 bg-midnight'></div>
                </div>
                <div className=' w-full'>
                    <p className=' text-xl sm:text-2xl'>Working with (COMPANY_NAME) has transformed our business operations. Their all-in-one platform has made project management, team collaboration, and customer relationship management seamless and efficient. We've seen a significant increase in productivity across all departments.</p>
                </div>
             
            </div>
            <div className=' text-3xl text-center'>
                    <p className=' font-bold mb-5'>(CLIENT_NAME)</p>
                    <p className=' text-xl'>(CLIENT_COMPANY)</p>
                </div>
        </motion.div>}
    </div>
  )
}

export default Testimonial