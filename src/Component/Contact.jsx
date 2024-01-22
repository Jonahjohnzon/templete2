import React from 'react'

const Contact = () => {
  return (
    <div className=' bg-metal py-20 flex justify-center text-green overflow-x-hidden w-[100vw]'>
                    <div className=' flex items-start flex-col lg:flex-row justify-between mb-28 w-[90%] lg:w-[80%] 2xl:w-[60%]' > 
                <section className=' w-full mb-5 lg:mb-0' >
                       <div className='  relative rounded-br-3xl' >
                      <img src='/a.avif' className=' w-full lg:w-[90%]'/>
               
                       </div>
                </section>
                <section className=' w-full '>
                    <h1 className=' text-5xl sm:text-7xl font-Black mb-7 font-bold'>Contact Us</h1>
                    <p className=' text-xl mb-5'>(COMPANY_NAME) is more than just a software provider. We are your strategic partner, committed to helping you navigate the complexities of today's digital landscape. </p>
                    <p className=' text-xl mb-5'>If you have any questions, need further information, or want to discuss how we can tailor our solution to meet your specific needs, please don't hesitate to contact us. Our dedicated team is always ready to assist you.</p>
                    <h1 className=' text-2xl font-bold '>Website | Phone | Email</h1>
                </section>
            </div>
    </div>
  )
}

export default Contact