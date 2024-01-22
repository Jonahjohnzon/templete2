import React from 'react'
import {motion} from 'framer-motion'

const Top = () => {
  const slide={
    hidden:{
      x:-20,
      opacity:0
    },
    show:{
      x:0,
      opacity:1,
      transition:{
        type:'tween',
        duration:0.2,
        delay:0.1,
        stiffness:400,
        when:'beforeChildren',
        staggerChildren:0.2
      }
    }
   
  }
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
    <div className=' bg-green  relative min-h-[950px] overflow-hidden text-metal flex justify-center items-center'>
            <div className=' xl:w-96 w-40 h-40 -bottom-64 absolute right-2/3 xl:h-96 rounded-full bg-metal z-10'></div>
            <div className=' xl:w-80 top-0 left-0 absolute w-40 h-40 xl:h-80 rotate-45 bg-metal z-10'></div>
            <div className="w-0 h-0 
  xl:border-l-[200px] border-l-[100px] border-l-transparent
  xl:border-t-[280px] border-t-[180px] border-t-metal top-1/2
  xl:border-r-[200px]  border-r-[100px] border-r-transparent absolute -right-20 rotate-45 z-10">
</div>

<div className=' w-[90%] min-h-80 xl:w-[70%] 2xl:w-[50%] relative z-20' >
        <section>
            <img alt='logo' src='/logo.avif' className=' w-28 mb-10'/>
        </section>
        <motion.section variants={slide} initial='hidden' animate='show' className=' font-Black'>
            <h1 className=' text-4xl sm:text-6xl mb-10 leading-[70px]'>Implementation Plan Template</h1>
            <motion.h2 variants={children}  className=' text-3xl mb-5'>Prepared for: [Client.Name]</motion.h2>
            <motion.p variants={children}  className=' text-xl'>Prepared by: [Sender.Name]</motion.p>
        </motion.section>
    </div>
    </div>
  )
}

export default Top