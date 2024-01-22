import React,{useEffect, useRef, useState} from 'react'
import Image from './Image'
import {motion,useInView} from 'framer-motion'

const Overview = () => {
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
        when:'beforeChildren',
        staggerChildren:0.2
      }
    }
   
  }
  useEffect(()=>{
if(isInView){
  setshow(true)
}
  },[isInView])
  const children={
    hidden:{
     opacity:0,
     x:-20,
    },
    show:{
      opacity:1,
      x:0
    }}
  return (
    <div className='bg-metal min-h-[800px]' ref={ref}>
    {show&&<motion.div variants={slide} initial='hidden' animate='show' className='  flex justify-center overflow-hidden w-full py-20 pb-40 text-green' >
        <div className=' w-[90%] lg:w-[85%] xl:w-[65%] 2xl:w-[41%]'>
            <h1 className=' font-Black text-4xl sm:text-6xl mb-5'>Overview</h1>
            <motion.p className=' text-xl mb-5' variants={children}>We are thrilled to embark on this journey with (CLIENT_NAME), aiming to enhance both employee and customer satisfaction.</motion.p>
            <motion.p className=' mb-20 text-xl' variants={children}>This page contains all the necessary details to successfully implement (COMPANY_NAME).</motion.p>
            <div className='  w-full flex flex-col lg:flex-row justify-between'>
                <motion.div className=' w-full  flex justify-center mb-20 lg:mb-0 ' variants={children}>
                <Image sc={'/image.jpg'} />
                </motion.div>
                <div  className=' w-full pl-4'>
                    <motion.h1 className=' text-3xl font-bold mb-5' variants={children}>Hi! I'm (NAME)</motion.h1>
                    <motion.p className=' text-xl mb-5' variants={children}>Your primary contact at (COMPANY_NAME). </motion.p>
                    <motion.p className=' text-xl mb-10' variants={children}> I'm here to provide you with in-depth knowledge about our product and guide you seamlessly through the onboarding process.</motion.p>
                    <motion.p className=' mb-5 font-bold text-xl' variants={children}>Best Regards,</motion.p>
                    <motion.img src='/sign.avif' className=' w-80' variants={children}/>
                </div>
            </div>
          
        </div>
    </motion.div>}
    </div>
  )
}

export default Overview