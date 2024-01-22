import React, { useState } from 'react'
import Calculate from './Calculate'


const Calculator = () => {
    const [amount, setamount] = useState(8654)
    const fix = 8654
    const [no, setno] = useState(5)
    const [cal, setCal] = useState(false)
  return (
    <div className=' w-full bg-metal py-20 pb-40 flex justify-center  text-green '>
        <div className=' w-[95%] sm:w-[85%] xl:w-[70%] 2xl:w-[53%] text-center'>
        <h1 className=' text-4xl sm:text-6xl mb-5 font-bold font-Black'>RETURN ON INVESTMENT</h1>
        <p  className=' sm:text-xl mb-5'>By adopting (COMPANY_NAME), your team will benefit from a productivity boost with the hours saved on creating compelling proposals and content. We worked with (CONTACT_NAME) to estimate those savings – here’s our projection:</p>
        <div className=' h-[500px] sm:h-[800px]  flex shadow-sm w-full justify-between items-center relative overflow-hidden rounded-xl' >
        <p className='  bg-white text-xs px-5 border-[1px] border-green bordershadow-sm-opacity-20 py-3 font-semibold cursor-pointer rounded-md absolute top-10 left-5 z-50' onClick={()=>{
          setCal(!cal)
        }}>{cal?"HIDE CALCULATOR":"SHOW CALCULATOR"}</p> 
          <div className={` h-full bg-white  ${cal?"w-[400px]":"w-0"} overflow-hidden transition-all duration-300 relative z-10`}>
            {cal&&<Calculate amount={amount} setamount={setamount}/>}
          </div>
  <div className=' bg-green w-full h-full overflow-hidden  rounded-lg relative'>
  <div className={`w-0 h-0 
   hidden sm:block
  border-l-[80px] border-l-transparent
  border-t-[140px] border-t-metal bottom-80 xl:bottom-48
  border-r-[80px] border-r-transparent transition-all duration-500 absolute ${cal?"-right-28":" -right-20 sm:right-5 xl:right-24"} rotate-90 z-10`}>
</div>
<div className={` w-40 bottom-24  transition-all duration-500 ${cal?"-right-60":"-right-20"} absolute h-40 rotate-12 bg-metal z-10`}></div>
<div className={` w-40 -bottom-24 transition-all duration-500 absolute ${cal?"-right-40":"right-20"} h-40 rounded-full bg-metal z-10`}></div>
                <section className='  flex flex-col justify-center h-full items-start p-5 relative z-40'>
                    <div className=' h-full w-[100%] sm:w-[50%] self-center flex justify-center flex-col items-center text-white'>
                        <h1 className=' text-white font-bold text-5xl sm:text-8xl mb-5'>${amount.toLocaleString()}</h1>
                        <p className=' text-base sm:text-xl mb-20'>Potential savings after one year</p>
                        <div className=' flex w-full text-xs mb-2 justify-between items-center'>
                            <p className=' font-medium  '>TEAM MEMBER</p>
                            <p className=' w-10 pb-2 text-center border-b-[1px] border-b-metal border-opacity-20'>{no}</p>
                        </div>
                        <div className=' w-full'>
                     <input
  type='range'
  className=' w-full focus:outline-none accent-midnight rounded-lg bg-metal bg-opacity-20 h-2 appearance-none cursor-pointer'
  step={1}
  min={5}
  max={100}
  value={no}
  style={{ "--thumb-size": "30px" }} 
  onChange={(e) => {
    const newValue = parseInt(e.target.value, 10);
    const difference = newValue - no;
    setno(newValue);
   setamount((prev) => prev + difference * fix);
  }}
/>
                        </div>
                        </div>

                </section>
            </div>
          
        </div>
        </div>
    </div>
  )
}

export default Calculator