import React, { useState } from 'react'
import { GoChevronDown,GoChevronUp } from "react-icons/go";
import { FaCheck } from "react-icons/fa6";
import Tilt from 'react-parallax-tilt';

const PriceTab = ({data,i,select, setselect}) => {
    const [users, setusers] = useState(1)
   
  return (

    <div className={` flex flex-col w-full items-center`} >
            <Tilt tiltEnable={(i == 1 && select == 1)? true:false} tiltReverse transitionSpeed={3000}  className={` flex flex-col w-full items-center`}  perspective={2000} trackOnWindow={true} gyroscope tiltMaxAngleX={20} tiltMaxAngleY={25}  > 
    <div className={`  ${i == 1? "bg-metal":"bg-white"} select-none ${((i == 1 &&  select == 1 ) || select == i)? "mb-14":"mb-4 "}   py-10 text-green cursor-pointer ${select == i? "scale-125":"scale-100 hover:scale-110 "} w-[80%] sm:w-44 xl:w-64  rounded-md p-5 relative  transition-all ease-in-out duration-300 `}  onClick={()=>setselect(i)}>
{i == 1&&<div className=' absolute -top-3 w-full left-0 flex justify-center'><div className='  bg-midnight rounded-2xl px-2 py-2 w-fit text-xs font-bold'><p>Recommended</p></div></div>}
        <div className=' flex flex-col items-center'>
            <h3 className=' mb-5 text-sm font-medium'>{data.title}</h3>
            {data?.old && <del className='text-[9px]'>${data.old.toFixed(2)}</del>}
            <h1 className=' text-4xl'>${data.price.toFixed(2) * users.toFixed(2)}</h1>
            <div className=' text-sm mb-5'>/{data.period}</div>
            <div className=' flex items-start mb-5'>
                <p className={` mr-2 pb-1 text-sm border-b-2 w-5 text-center ${select == i? "border-opacity-80":"border-opacity-20"}  border-b-green`}>{users}</p>
                <div className=' mr-2 text-sm'>
                    <div className={`${(select == i && users < 10)? "opacity-80":"opacity-20"}`} onClick={()=>{
                        if(select == i && users < 10)
                        {
                        setusers((e)=>e+1)}}}><GoChevronUp /></div>
                    <div className={`${select == i && users > 1? "opacity-80":"opacity-20"}`} onClick={()=>{
                        if(select == i && users > 1)
                        {
                        setusers((e)=>e-1)}}}><GoChevronDown /></div>
                </div>
                <p className=' text-sm'>Users</p>
            </div>
            <input type='submit' value={select == i? "✓ Selected":"Select"} className={` text-xs w-full py-2 hover:shadow-inner  rounded-md ${select == i? " bg-midnight":"bg-white border-2 border-opacity-5 border-green"}  font-bold`}/>
        </div>
    </div>
    </Tilt>
    {
        data.data.map((e,i)=>{
            return(
                <div className=' mb-1 flex items-center w-[80%] sm:w-fit '>
                   <FaCheck  className=' mr-2 text-midnight  '/> <div className=' text-xs'>{e}</div>
                </div>
            )
        })
    }
    </div>
   
  )
}

export default PriceTab