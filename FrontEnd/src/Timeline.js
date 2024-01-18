import React from 'react'
import event from '../images/event_logo.png'
import b from '../images/2.jpg'
const Timeline = () => {
  return (
   <>
 <section >
    <div class="bg-[#191943] text-black py-8  m-5 relative" style={{ backgroundImage: `url(${b})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div class="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
      <div class="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8 ">
   
        <p class="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2 text-white">Schedule</p>
       <p class="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2 text-white">Illuminate -2024</p>
       <img class="mx-auto my-4   " src={event} />
      </div>
    
      <div class="ml-0 md:ml-12 lg:w-2/3 sticky">
        <div class="container mx-auto w-full h-full">
          <div class="relative wrap overflow-hidden p-10 h-full">
            <div class="border-2-2 border-yellow-555 absolute h-[80%] border"
             style={{ right: '50%', border: '2px solid #FFC100', borderRadius: '1%' }}></div>
            <div class="border-2-2 border-yellow-555 absolute h-[80%] border"
             style={{ left: '50%', border: '2px solid #FFC100', borderRadius: '1%' }}></div>
            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="order-1 w-5/12 px-1 py-4 text-right">
                <p class="mb-3 text-base text-white">Schedule 1</p>
                <h4 class="mb-3 font-bold text-lg md:text-2xl text-white">Name</h4>
                <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                 description
                </p>
              </div>
            </div>
            <div class="mb-8 flex justify-between items-center w-full right-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="order-1  w-5/12 px-1 py-4 text-left">
                <p class="mb-3 text-base text-white">Schedule 2</p>
                <h4 class="mb-3 font-bold text-lg md:text-2xl text-white">Name</h4>
                <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                 description
                </p>
              </div>
            </div>
            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="order-1 w-5/12 px-1 py-4 text-right">
                <p class="mb-3 text-base text-white">schedule 3</p>
                <h4 class="mb-3 font-bold text-lg md:text-2xl text-white">Name</h4>
                <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                 description
                </p>
              </div>
            </div>

            <div class="mb-8 flex justify-between items-center w-full right-timeline">
              <div class="order-1 w-5/12"></div>

              <div class="order-1  w-5/12 px-1 py-4">
                <p class="mb-3 text-base text-white">Schedule 4</p>
                <h4 class="mb-3 font-bold  text-lg md:text-2xl text-left text-white">Name</h4>
                <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                  description
                </p>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  </div>
  </section>
   </>
  )
}

export default Timeline
