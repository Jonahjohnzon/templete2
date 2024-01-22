import React from 'react'

const Image = ({sc}) => {
  return (
    <div >
        <div className=' lg:h-[390px]  lg:w-[300px] xl:h-[450px] xl:w-[343px] relative bg-cover bg-center ' >
          <img className='  z-30 w-full rounded-3xl h-full ' src={sc}/>
            <div className=' xl:w-40  w-28 h-28 xl:h-40 rounded-full bg-midnight  z-10 -bottom-10 -left-10 absolute'>
                <div className=' relative w-full h-full'>
                <div className='   z-20 bottom-10 -right-5 absolute w-0 h-0 
  border-l-[50px] border-l-transparent
  border-t-[70px] border-t-green top-1/2
  border-r-[40px] border-r-transparent rotate-90'></div>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Image