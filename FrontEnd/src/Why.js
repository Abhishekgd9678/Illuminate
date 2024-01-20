import React from 'react'
import one from '../images/1.jpg'
const Why = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center m-0 md:mx-4 md:my-16 w-full h-full'>
      <div className='flex top-0 md:relative justify-center items-center w-full md:w-1/2  rounded-lg'>
          <img className="w-screen m-2 p-2 object-cover"src={one}/>
      </div>
      <div className='w-full flex flex-col items-center md:items-start'>
          <h2 className='text-2xl font-bold'>Why Illuminate?</h2>
          <h2 className='text-xl font-medium m-3'>Join us at illuminate, a unique initiative spotlighting groundbreaking achievements in science and engineering. Following a successful inaugural edition, the second event on February 17, 2024, in Mysuru, celebrates engineering excellence. Organized with L&T Technology Services and The National Institute of Engineering, it features key speakers and draws a diverse audience, including scientists, engineers, industry leaders, and more. Don't miss this opportunity to explore transformative developments in the global engineering landscape.</h2>
      </div>
    </div>
  )
}

export default Why