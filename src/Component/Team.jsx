import React,{useEffect, useRef, useState} from 'react'
import {motion,useInView} from 'framer-motion'

const Team = () => {
  const [show, setshow] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref)
  const slide={
    hidden:{
      y:-20,
      opacity:0
    },
    show:{
      y:0,
      opacity:1,
      transition:{
        type:'tween',
        duration:0.4,
        delay:0.2,
        stiffness:400,
        when:'beforeChildren',
        staggerChildren:0.2
      }
    }
   
  }
  const children={
    hidden:{
     opacity:0,
     y:-20,
    },
    show:{
      opacity:1,
      y:0
    }}
    useEffect(()=>{
      if(isInView){
        setshow(true)
      }
},[isInView])
  return (
    <div className=' pt-20 pb-60 bg-green min-h-80 text-metal flex justify-center overflow-x-hidden w-[100vw]' ref={ref}>
         {show&&<motion.div   variants={slide} initial='hidden' animate='show' className=' w-[80%] xl:w-[60%] 2xl:w-[40%] flex flex-col items-center'>
            <h1 className=' text-5xl sm:text-6xl font-Black font-bold mb-20'>Our Team</h1>
            <div  className=' flex flex-col items-center lg:flex-row lg:items-start' > 
                <motion.section variants={children}  className=' w-full mb-20 sm:mb-0' >
                       <div className=' shadow-lg lg:w-[280px] xl:w-[330px]  rounded-tr-3xl relative rounded-bl-3xl lg:h-[300px] xl:h-[330px]' >
                       <img className='  z-30 w-full rounded-3xl h-full ' src="/office.png"/>
                       <div className=' w-16 xl:w-20 h-16 xl:h-20 rounded-full  bg-white z-10 -top-10 -left-10 absolute'></div>
                           <div className='   z-20 -bottom-5 -right-5 absolute w-0 h-0 
  border-l-[50px] border-l-transparent
  border-t-[70px] border-t-midnight 
  border-r-[40px] border-r-transparent rotate-45'></div>
               
                       </div>
                </motion.section>
                <motion.section  variants={children}  className=' w-full'>
                    <p className=' text-lg sm:text-xl'>Our team at (COMPANY_NAME) comprises dedicated, experienced, and innovative individuals who are passionate about delivering the best software solutions. We thrive on problem-solving and continuously strive to enhance our product to meet the evolving needs of our clients. Our collective expertise in technology, project management, and customer support ensures that we deliver a user-friendly, robust, and efficient platform.</p>
                </motion.section>
            </div>
         </motion.div>}
    </div>
  )
}

export default Team