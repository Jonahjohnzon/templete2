import React from 'react'
import Top from './Component/Top'
import Overview from './Component/Overview'
import Implement from './Component/Implement'
import Investment from './Component/Investment'
import Case from './Component/Case/Case'
import Testimonial from './Component/Testimonial'
import Team from './Component/Team'
import About from './Component/About'
import Sample from './Component/Sample'
import Ready from './Component/Ready'
import Contact from './Component/Contact'

const Page = () => {
  return (
    <div className=' font-Poppins overflow-x-hidden '>
        <Top/>
        <Overview/>
        <Implement/>
        <Investment/>
        <Case/>
        <Testimonial/>
        <Team/>
        <About/>
        <Sample/>
        <Ready/>
        <Contact/>
    </div>
  )
}

export default Page