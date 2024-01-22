import React from 'react'
import { TbUserFilled } from "react-icons/tb";

const Ready = () => {
  return (
    <div className=' bg-green py-40 flex flex-col items-center'>
        <p className=' text-3xl sm:text-4xl font-bold text-center text-metal mb-20'>Ready to get started?</p>
        <p className=' text-white text-2xl font-bold mb-5 bg-white bg-opacity-20 px-20 py-7 rounded-md'>Accept</p>
        <div className=' flex items-center w-20 justify-between'>
        <div className=' w-7 h-7 text-white text-opacity-70 rounded-full bg-white bg-opacity-25 flex justify-center items-center text-xl'><TbUserFilled/></div>
        <div className=' w-7 h-7 text-white text-opacity-70 rounded-full bg-white bg-opacity-25 flex justify-center items-center text-xl'><TbUserFilled/></div>
        </div>
    </div>
  )
}

export default Ready