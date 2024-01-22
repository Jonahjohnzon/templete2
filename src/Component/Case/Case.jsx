import React, { useState } from "react";
import { TfiPlus } from "react-icons/tfi";
import { GoArrowUp} from "react-icons/go";
import { FaArrowDown } from "react-icons/fa6";
import {motion} from 'framer-motion'

const Case = () => {
  const [show, setshow] = useState(false);
  const [show2, setshow2] = useState(false);
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
    <div className=" bg-green py-10 w-full  flex justify-center">
      <div className=" flex flex-col justify-center items-center w-[90%] xl:w-[70%]  2xl:w-[50%]">
        <div className=" text-green py-5  shadow-md bg-white px-5 flex cursor-pointer  items-center" onClick={()=>{setshow(!show)}}>
          {" "}
          {show ? (
            <GoArrowUp className=" mr-2" />
          ) : (
            <TfiPlus className=" mr-2" />
          )}{" "}
          Case Studies
        </div>
        {show && <motion.div variants={slide} initial='hidden' animate='show'  className=" w-full mt-32 ">
          <h1 className=" text-metal font-bold text-4xl mb-10  sm:text-[55px] font-Black">
            Case Studies
          </h1>
          <div style={{backgroundImage:"url('/photo2.jpeg')"}} className=" relative  w-full h-60 bg-center rounded-lg border-[1px] border-midnight border-opacity-20" onClick={()=>{setshow2(!show2)}}>
            <div className=" w-full h-full bg-green hover:bg-gradient-to-t hover:from-black hover:to-transparent flex items-end px-4 py-4 hover:bg-opacity-40 cursor-pointer bg-opacity-20 absolute top-0">
                <section className=" text-white flex flex-col-reverse h-full justify-between sm:flex-row items-end"> 
                    <p className="text font-bold text-xl sm:text-3xl">Streamlining Operations and Boosting Efficiency for (CLIENT_NAME) with (COMPANY_NAME)</p>
                    <div className=" px-5 rounded-md hover:scale-105 transition-all duration-300 py-2 font-bold text-green bg-midnight text-sm flex items-center">{show2?"CLOSE":"READ"} <FaArrowDown className={`${show2?"rotate-0":"-rotate-90"} transition-all duration-300  font-bold ml-3`}/></div>
                </section>

            </div>
            
          </div>
                <motion.section  variants={children}  className={` bg-white  rounded-b-lg text-green text-xl px-5 transition-all duration-500 overflow-hidden ${show2?"max-h-[2000px]":"max-h-[0px]"}`}>
                  <p className=" py-5 italic">Delivering a comprehensive software solution for enhanced productivity.</p>
                  <p className=" mb-5"><span className=" font-bold">Problem:</span> (CLIENT_NAME) needed to enhance operational efficiency and customer satisfaction while reducing disruption during system integration.</p>
                  <p  className=" mb-5"><span className=" font-bold">Solution:</span> We provided a seamless integration of our platform into (CLIENT_NAME)'s existing systems, coupled with comprehensive training and continuous support to ensure ease of use and proficiency.</p>
                  <p  className=" pb-5"><span className=" font-bold">Results:</span> Our solution led to improved workflows, automated tasks, increased operational efficiency, and potential savings of $100,962 after one year. Positive feedback from the client confirmed the transformative impact of our platform on their business operations.</p>
                </motion.section>

        </motion.div>}
      </div>
    </div>
  );
};

export default Case;
