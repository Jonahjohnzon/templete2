import React,{useEffect, useRef, useState} from 'react'
import { GoDotFill } from "react-icons/go";
import Tab from '../Tab';
import {motion,useInView} from 'framer-motion'

const PhaseOne = () => {
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
      const children={
        hidden:{
         opacity:0,
         x:-20,
        },
        show:{
          opacity:1,
          x:0
        }}

        useEffect(()=>{
            if(isInView){
              setshow(true)
            }
              },[isInView])
  return (
    <div className='bg-metal min-h-[900px]' ref={ref}>
     {show&&<motion.div variants={slide} initial='hidden' animate='show' className='  text-green py-40 flex justify-center'>
        <div className=' w-[90%] lg:w-[80%] xl:w-[60%] 2xl:w-[43%]'>
            <main  className=' mb-10'>
                <h1 className=' text-4xl sm:text-6xl font-Black font-bold mb-10'>Phase One: Launch</h1>
                <motion.h4 variants={children} className=' text-3xl font-bold mb-5'>Objectives</motion.h4>
                <motion.p variants={children} className=' text-xl mb-5'>In prior conversations, we outlined the general needs of (CLIENT_NAME). Now, let's delve into the specific objectives of this project to clearly define what we aim to achieve.</motion.p>
                <motion.ul variants={children} className=' text-xl mb-20 flex flex-col'>
                    <li className=' mb-2 flex w-full'>
                       <div className=' w-[5%] lg:w-[3%]'><p>1.</p></div><p className=' w-full'><span className=' font-bold'>Seamless Integration:</span> Ensure a smooth and seamless integration of our platform with your existing systems. We aim to make this transition as easy as possible, minimizing disruptions to your daily operations.</p> 
                    </li>
                    <li className=' mb-2 flex'>
                       <div className=' w-[5%] lg:w-[3%]'><p>2.</p></div><p className=' w-full'><span className=' font-bold'>Training and Support:</span> We understand that adopting a new system can be challenging. Therefore, we aim to provide comprehensive training and continuous support to your team, ensuring they are comfortable and proficient in using our platform.</p> 
                    </li>
                    <li className=' flex'>
                       <div className=' w-[5%] lg:w-[3%]'><p>3.</p></div><p  className=' w-full'><span className=' font-bold'>Operational Efficiency:</span> Improve operational efficiency through the use of our platform. By automating manual tasks, streamlining workflows, and enhancing communication, we aim to help (CLIENT_NAME) save time and resources.</p> 
                    </li>
                </motion.ul>
                <motion.div variants={children} className=' flex flex-col lg:flex-row'>
                    <div className=' w-full mb-5 lg:mb-0'><img src='/typing.jpeg' className=' lg:w-[400px]'/></div>
                    <div  className=' w-full flex justify-center'>
                        <div className=' w-full lg:w-[80%]'>
                            <h1 className=' font-bold text-3xl mb-5'>Implementation Checklist</h1>
                            <ul className=' text-xl'>
                                <li className=' flex items-center h-fit mb-2'>
                                    <div className=' mr-2'><GoDotFill  className=' text-sm'/></div><p>Send over account and login details</p>
                                </li>
                                <li className=' flex items-center mb-2'>
                                    <div className=' mr-2 '><GoDotFill  className=' text-sm'/></div><p>Setup Viva integration</p>
                                </li>
                                <li className=' flex items-center mb-2'>
                                    <div className=' mr-2 '><GoDotFill  className=' text-sm'/></div><p>Create your initial workflow</p>
                                </li>
                                <li className=' flex items-center'>
                                    <div className=' mr-2'><GoDotFill  className=' text-sm'/></div><p>Invite team members</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </main>
            <Tab variants={children} name={"How to set up Viva"} type={"youtube"}/>
        </div>
    </motion.div>}
    </div>
  )
}

export default PhaseOne