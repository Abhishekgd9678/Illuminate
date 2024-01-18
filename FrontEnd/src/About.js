import React from 'react'
import logonie from "../images/logo.png";
import lt from '../images/lt.svg'
const About = () => {
  return (
    <>
  
    <div>
        <div class="text-center p-8">
    <h2 class="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        Who Are We?
    </h2>

    <div class="flex flex-wrap items-center mt-20 text-left text-center">
        <div class="w-full md:w-3/5 lg:w-1/2 px-4 flex justify-center items-center">
            <img src={logonie} className='h-[250px]'/>
        </div>
        <div class="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12 bg-gradient-to-r from-slate-300 to bg-slate-100 p-5">
            <h3 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
               The National Institute of Engineering
            </h3>
            <p class="sm:text-lg mt-6">
            The National Institute of Engineering (NIE), established in 1946, is ranked among the top engineering colleges in the country that include IITs and NITs as per National Institution Ranking Framework (NIRF-2021) announced by Ministry of Human Resources Development (MHRD). It is ranked 13 among India’s top Engineering Colleges, as per survey conducted by India Today (July 2021). NIE is managed by a registered society and nine out of ten current directors are distinguished alumni of the institute.
            </p>
        </div>
    </div>

    <div class="flex flex-wrap items-center mt-20 text-left text-center">
        <div class="w-full md:w-3/5 lg:w-1/2 px-4">
            <img src={lt}/>
        </div>
        <div class="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12 bg-gradient-to-r from-slate-300 to bg-slate-100 p-5">
            <h3 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl text-right">
            L&T Technology Services
            </h3>
            <p class="sm:text-lg mt-6 ">
            L&T Technology Services Limited (LTTS) is a global leader in Engineering and R&D (ER&D) services. With close to 1,000 patents filed for 57 of the Global Top 100 ER&D spenders, LTTS lives and breathes engineering. Our innovations speak for themselves – World’s 1st Autonomous Welding Robot, Solar ‘Connectivity’ Drone, and the Smartest Campus in the World, to name a few.

LTTS’ expertise in engineering design, product development, smart manufacturing, and digitalization touches every area of our lives. With over 100 Innovation and R&D design centers globally, we specialize in disruptive technology spaces including 5G, Artificial Intelligence, Collaborative Robots, Digital Factory, and Autonomous Transportation.
            </p>
        </div>
    </div>

    
</div>
    </div>
    </>
  )
}

export default About