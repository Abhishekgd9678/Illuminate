import React, { useState } from 'react'
import img1 from "../images/s1.png"
import img2 from "../images/s2.png"
import Typewriter from "typewriter-effect";

const Speaker = () => {
    const [text,setText] = useState(false);
 
  return (
    <div className='flex justify-center mt-[3rem] bg-blue-500 bg-opacity-10' >
    <div className='w-10/12 flex flex-col gap-10' >
        <div className='text-3xl font-semibold mt-10' >
            {/* Our Beloved Speakers */}
           {text ? text : <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Our Beloved Speakers")
                        .pauseFor(1000)
                        .start()
                        .callFunction(()=>{
                            setText("Our Beloved Speakers");
                        })
                }}
            />}
        </div>
        <div className='flex flex-col md:flex-row shadow-2xl rounded-lg m-2' 
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top"
         >
            <div className='w-full'>
                <img src={img1} className='rounded-[50%]  w-[100rem] py-2 px-4 m-2 ' />
            </div>
            <div className='p-2 m-2' >
                <h1 className='text-2xl font-semibold py-4' >
                Ramesh KS – Sr. Vice President, Ather Energy
                </h1>
                <p className='text-lg font-base' >
                    Shri Ramesh KS is a dynamic business leader with over 30
                    years of experience. An automotive industry veteran, he
                    currently manages vehicle engineering, battery, motor and
                    manufacturing engineering, strategic sourcing, and the supply
                    chain teams at Ather Energy.
                    Ramesh is renowned for his deep understanding of high
                    volume-high mix B2B businesses catering to customer-specific
                    custom products. In his extensive innings across leading global
                    organizations, he has demonstrated robust cross-cultural
                    management capabilities and has an enviable record of driving culture transformation and
                    customer-centricity journeys.
                </p>
            </div>
        </div>
        <div className='flex flex-col md:flex-row shadow-2xl rounded-lg m-2' 
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top"
         >
            <div>
                <img src={img2} className='rounded-[50%] w-[100rem] py-2 px-4 m-2 ' />
            </div>
            <div className='p-2 m-2' >
                <h1 className='text-2xl font-semibold py-4' >
                    Srikanth Nadhamuni – Founder CTO, Aadhaar
                </h1>
                <p className='text-lg font-base' >
                    Shri Srikanth Nadhamuni is currently CEO of Khosla Labs
                    and Chairman & Co-Founder at Novopay. He was formerly
                    the Head of Technology at the UID Authority of India, helping
                    setup the Technology Center for the development, design and
                    operations of the Aadhaar system to issue a National ID to
                    1.2 billion Indian citizens.
                    Today, Srikanth serves on the Board of HDFC Bank, and as
                    Chairman of Novopay, helps drive emerging fintech
                    paradigms for payments and banking solutions through a
                    network of retail leveraging smartphones and Aadhaar-based Micro ATMs. He is also a member
                    of the Apex Committee on AI for Centers of Excellence, set up by the Ministry of Education,
                    Government of India.
                </p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Speaker