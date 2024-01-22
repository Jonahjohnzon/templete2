import React,{useEffect, useRef, useState} from 'react'
import {motion,useInView} from 'framer-motion'

const About = () => {
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
    <div className=' pt-40 pb-40 min-h-[800px] bg-metal flex justify-center  text-green overflow-x-hidden w-[100vw]' ref={ref}>
        {show&&<motion.div  variants={slide} initial='hidden' animate='show' className=' w-[90%] xl:w-[60%] 2xl:w-[40%]'>
            <h1 className=' text-5xl sm:text-6xl font-bold font-Black mb-10 '>About Us</h1>
            <motion.p variants={children} className=' text-xl mb-20 '>Our team at (COMPANY_NAME) comprises dedicated, experienced, and innovative individuals who are passionate about delivering the best software solutions. We thrive on problem-solving and continuously strive to enhance our product to meet the evolving needs of our clients. Our collective expertise in technology, project management, and customer support ensures that we deliver a user-friendly, robust, and efficient platform.</motion.p>
            <motion.div variants={children} className=' flex flex-col lg:flex-row items-start mb-28' > 
                <section className=' w-full mb-16' >
                       <div className=' shadow-lg lg:w-[300px] rounded-tl-3xl relative rounded-br-3xl lg:h-[400px]' >
                       <img className='  z-30 w-full rounded-3xl h-full ' src="/img.webp"/>
                       <div className=' w-20 h-20 rounded-full  bg-green z-10 -top-10 -right-10 absolute'></div>
                           <div className='   z-20 -bottom-10 -left-10 absolute w-0 h-0 
  border-l-[50px] border-l-transparent
  border-t-[70px] border-t-midnight 
  border-r-[40px] border-r-transparent rotate-12'></div>
               
                       </div>
                </section>
                <section className=' w-full '>
                    <h1 className=' text-4xl font-Black mb-7'>Our Culture</h1>
                    <p className=' text-xl'>At (COMPANY_NAME), we foster a culture of innovation, collaboration, and continuous learning. We believe that every team member brings unique skills and perspectives to the table, and we encourage open dialogue and idea-sharing to drive innovation. Our supportive and inclusive environment ensures that every team member feels valued and motivated to perform their best. </p>
                </section>
            </motion.div>
            <motion.div variants={children}>
                <h3 className=' text-4xl font-bold mb-5 '>Our Expertise</h3>
                <p className='text-xl mb-20' >Our team is composed of professionals with diverse backgrounds, from software engineers and project managers to customer service specialists and sales representatives. This diversity allows us to approach problem-solving from various angles, ensuring comprehensive solutions for our clients. Our collective expertise spans several industries, enabling us to understand and cater to the unique needs of businesses across sectors.</p>
            </motion.div>
            <motion.div variants={children} className=' flex  flex-col sm:flex-row w-full'>
                <h3 className=' text-4xl font-bold mb-5  sm:w-[30%] '>Vision</h3>
                <p className='text-xl  sm:w-[70%] mb-20' >Our vision is to empower businesses worldwide by providing them with innovative, user-friendly, and efficient software solutions that streamline operations, foster collaboration, and drive growth.</p>
            </motion.div>
            <motion.div variants={children}  className=' flex flex-col sm:flex-row w-full '>
                <h3 className=' text-4xl font-bold mb-5 sm:w-[30%] '>Mission</h3>
                <p className='text-xl sm:w-[70%]' >Our mission is to deliver high-quality, reliable, and robust software solutions that meet the unique needs of each client. We strive to continuously innovate our product, provide exceptional customer service, and contribute to the success and growth of businesses around the globe.</p>
            </motion.div>
        </motion.div>}
    </div>
  )
}

export default About