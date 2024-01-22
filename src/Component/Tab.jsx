import React, { useState } from 'react'
import Youtube from './TabType/Youtube'
import Google from './TabType/Google'
import Training from './TabType/Training'
import Course from './TabType/Course'
import {motion} from 'framer-motion'

const Tab = ({name, type, variants}) => {
    const [show, setshow] = useState(false)
  return (
    <div>
    <motion.div variants={variants} className=' w-full bg-[#B1E88B] text-green rounded-md cursor-pointer hover:bg-[#9AD381] transition-all ease-in-out duration-300' onClick={()=>setshow(!show)} >
        <div className=' flex text-2xl lg:text-3xl font-bold items-center px-3 py-2 '>{show?<span className='font-light w-[4%]'>-</span>:<span className=' font-light w-[7%]  lg:w-[4%]'>+</span>}<p >{name}</p></div>
    </motion.div>
    {(type == "youtube" && show) &&<div className=' bg-white shadow-sm rounded-md w-full p-10'>
       <Youtube/>
    </div>}
    {(type == "google" && show) &&<div className=' bg-white shadow-sm rounded-md w-full p-10'>
       <Google/>
    </div>}
    {(type == "training" && show) &&<div className=' bg-white shadow-sm rounded-md w-full p-10'>
       <Training/>
    </div>}
    {(type == "video" && show) &&<div className=' bg-white shadow-sm rounded-md w-full p-10'>
       <Course/>
    </div>}
    </div>
  )
}

export default Tab