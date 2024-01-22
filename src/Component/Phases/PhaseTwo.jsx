import React,{useEffect, useRef, useState} from 'react'
import { GoDotFill } from "react-icons/go";
import Tab from '../Tab';
import {motion,useInView} from 'framer-motion'

const PhaseTwo = () => {
    const [show, setshow] = useState(false)
    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(()=>{
        if(isInView){
          setshow(true)
        }
},[isInView])

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
    <div className=' bg-white min-h-[900px]  py-40 flex justify-center text-green' ref={ref}>
        {show&&<motion.div  variants={slide} initial='hidden' animate='show' className=' w-[90%] lg:w-[80%] xl:w-[60%] 2xl:w-[43%]'>
            <main  className=' mb-10'>
            <motion.h1 variants={children} className=' text-4xl sm:text-5xl lg:text-6xl font-Black font-bold mb-20'>Phase Two: Optimize and Scale</motion.h1>
            <motion.div variants={children} className=' flex flex-col lg:flex-row '>
                   
                    <div  className=' w-full flex justify-center'>
                        <div className=' w-full lg:w-[90%]'>
                            <h1 className=' font-bold text-2xl lg:text-3xl mb-5'>Implementation Checklist</h1>
                            <ul className=' text-xl'>
                                <li className=' flex items-center h-fit mb-2'>
                                    <div className=' mr-2'><GoDotFill  className=' text-sm'/></div><p>Employee and manager trainings</p>
                                </li>
                                <li className=' flex items-center mb-2'>
                                    <div className=' mr-2 '><GoDotFill  className=' text-sm'/></div><p>Turn on Smile workflow</p>
                                </li>
                                <li className=' flex items-center mb-2'>
                                    <div className=' mr-2 '><GoDotFill  className=' text-sm'/></div><p>Make everyone smile</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className=' w-full mb-20'><img src='/photo.jpeg' className=' w-full lg:w-[400px]'/></div>
                </motion.div>
                <div className=' w-full mb-5 '><Tab variants={children} name={"Training Deck"} type={"google"}/></div>
                <div className=' w-full mb-5 '><Tab variants={children} name={"Training Video"} type={"training"}/></div>
                <div className=' w-full mb-5 '><Tab variants={children} name={"Getting Started Resources"}  type={"video"}/></div>
            </main>
        </motion.div>}
    </div>
  )
}

export default PhaseTwo