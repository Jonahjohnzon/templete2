import React, { useState } from 'react'
import { FaCheck } from "react-icons/fa6";

const SampleTab = ({info, setprice,price}) =>{
    const [check, setCheck] = useState(false)

    const Handlecheck =()=>{
      
        if(!check)
        {
            setCheck(true)
            setprice(price + info.price)
           
        }
        else if(check && price != 0)
        {
            setCheck(false)
            setprice(price - info.price)
            
        }
        else{
            return
        }
       
    }
    return(
        
            <ul className={` flex-col sm:flex-row px-5 sm:px-10 flex items-start w-full justify-between py-5 border-opacity-15 bg-opacity-5 border-green border-t-[1px] ${check?"  bg-transparent":" bg-green"}`}>
                <li className=' w-full flex mb-5 sm:mb-0  items-center'><div className={` w-5 h-5 mr-2 ${check?"bg-midnight":"bg-transparent"} border-green border-opacity-20 cursor-pointer transition-all ease-in-out duration-150 rounded-sm  hover:outline outline-[rgba(0,48,50,0.1)] flex justify-center items-center border-[1px] text-green`} onClick={Handlecheck}>{check && <FaCheck className=' text-sm'/>}</div><p>{info.description}</p></li>
                <div className=' w-full flex justify-between'>
                <li className=' w-full text-sm sm:text-base flex justify-start sm:justify-end'><p>${info.item}.00</p></li>
                <li className=' w-full text-sm sm:text-base  flex justify-end'><div></div><p>${info.price}.00</p></li>
                </div>
            </ul>

    )
}

export default SampleTab 