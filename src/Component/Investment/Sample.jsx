import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa";
import SampleTab from './Tabs';

const Sample = () => {
    const [price, setprice] = useState(0)
    const [show, setShow] = useState(false)
    const data = [
        {description:"Onboarding",
        item:500,
        price:500},
        {description:"Setup fee",
        item:250,
        price:250}
    ]

  return (
    <div className=' text-green w-full   pb-20' >
        <div className=' w-full flex flex-col items-center'>
            <div className={` bg-metal flex flex-col sm:flex-row sm:justify-between sm:items-center px-3 sm:px-10 py-8 w-full rounded-t-md ${show?  "rounded-none":"rounded-b-md"}  transition-all duration-1000`}>
                <div className=' flex justify-between w-full items-center mb-3'>
                <h1 className=' text-2xl font-bold '>Sample Add-ons</h1>
                <div className=' w-10 group rounded-full mr-3  h-10 bg-green bg-opacity-10 hover:bg-opacity-20 cursor-pointer flex justify-center items-center  relative' onClick={()=>{setShow(!show)}}>
                        <div className=' absolute -top-12 hidden group-hover:block'>
                            <div className=' whitespace-nowrap text-xs font-bold text-white bg-[#47525E] px-4 py-2 rounded-md'>{show?"CLOSE SECTION":"OPEN SECTION"}</div>
                        </div>
                        <FaAngleDown className={` font-bold ${show?"rotate-0":"-rotate-90"} transition-all duration-500`}/></div>
                </div>
                <div className=' flex items-center'>

                    <div className=' flex flex-col items-end'>
                        <p className=' font-semibold text-xs'>SUBTOTAL</p>
                        <p className=' text-xl'>${price}.00</p>
                    </div>
                </div>
            </div>
            <div className={` mb-14 w-full overflow-hidden  ${show? "max-h-[1000px]":"max-h-[0px]"} transition-all duration-500   bg-white rounded-b-md   `} >
                <ul className=' sm:flex font-bold hidden    px-10 justify-between py-5'>
                    <li className=' w-full'>Description</li>
                    <li className=' w-full flex justify-end'>Item</li>
                    <li className=' w-full flex justify-end'>Price</li>
                </ul>
                {
                    data.map((e,i)=>{
                        return(
                            <div key={i}>
                            <SampleTab info={e} setprice={setprice} price={price}/>
                            </div>
                        )
                    })
                }
            </div>
            <div className=' bg-metal w-[100%] text-xs sm:text-base sm:w-[45%] rounded-md p-5'>
                <div >
                    <div className='  mb-2 flex justify-between items-center'>
                    <h2 >Total One Off</h2>
                    <p>${price}.00</p>
                    </div>
                    <div  className=' mb-5 pb-5 border-green border-opacity-15 border-b-[1px] flex justify-between items-center'>
                        <h1>Total Recurring</h1>
                        <p>$8.00 / month</p>
                    </div>
                    <div  className=' flex justify-between items-center'>
                        <h1 className=' text-xl font-bold'>Total Due  Today</h1>
                        <p className='text-xs sm:text-base'>${price + 8}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sample