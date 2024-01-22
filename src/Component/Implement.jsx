import React from 'react'
import PhaseOne from './Phases/PhaseOne'
import PhaseTwo from './Phases/PhaseTwo'

const Implement = () => {
  return (
    <div className=' overflow-x-hidden w-[100vw]'>
        <div>
        <div className=' text-metal bg-green py-40  flex justify-center relative overflow-hidden'>
        <div className=' w-60 2xl:w-96 -bottom-48 absolute right-60 h-60 2xl:h-96 rounded-full bg-metal z-10'></div>
            <div className="w-0 h-0 
  border-l-[100px] border-l-transparent
  border-t-[310px] border-t-metal -top-40
  border-r-[250px] border-r-transparent absolute right-60 -rotate-[40deg] z-10">
</div>
            <div className=' w-[95%] lg:w-[90%] xl:w-[70%] 2xl:w-[57%]'>
            <h1 className=' text-4xl sm:text-5xl lg:text-6xl font-Black mb-5 font-bold '>Implementation Plan</h1>
            <p className=' text-xl w-[100%] sm:w-[75%]'>The implementation process will span two months, with the aim of completion by the end of the year.</p>
            </div>
        </div>
        <div>
           <PhaseOne/>
           <PhaseTwo/>
        </div>
        </div>
    </div>
  )
}

export default Implement