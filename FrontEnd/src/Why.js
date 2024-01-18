import React from 'react'
import one from '../images/1.jpg'
const Why = () => {
  return (
    <div className='flex justify-center items-center mx-4 my-16'>

    <div className='flex justify-center items-center w-1/2'>
        <img className="h-[400px] "src={one}/>
    </div>
   <div className='w-1/2'>
    <h2 className='text-2xl font-bold'>Why Illuminate?</h2>
    <h2 className='text-xl font-medium'>Join us at illuminate, a unique initiative spotlighting groundbreaking achievements in science and engineering. Following a successful inaugural edition, the second event on February 17, 2024, in Mysuru, celebrates engineering excellence. Organized with L&T Technology Services and The National Institute of Engineering, it features key speakers and draws a diverse audience, including scientists, engineers, industry leaders, and more. Don't miss this opportunity to explore transformative developments in the global engineering landscape.</h2>
   </div>
    </div>
  )
}

export default Why