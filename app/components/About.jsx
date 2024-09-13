'use client'
import { GoArrowUpRight } from "react-icons/go";

import { useState } from "react"

const About = () => {


  const [hover, sethover] = useState(false)

  let enter = ()=>{
    sethover(true)
  }
  let leave = ()=>{
    sethover(false)
  }




  return (
    <div className="w-full px-5 py-5 md:px-20 md:py-20 bg-black">
      <h1 className="text-white text-[1rem] md:text-[1.8rem] leading-none text-justify mt-10 md:mt-0">We are a leading IT company in Kerala that has been established to give the optimum level of IT services to industrial, commercial, and residential customers nationwide. With a proven track record of success, we have been at the forefront of IT innovation for seven years</h1>


      <div className="w-full border-t-[1px] border-zinc-100 mt-20 pt-20 flex lg:flex-row flex-col ">


        <div className="w-full md:w-1/2">
          <h1 className="text-[4rem] md:text-[5rem] leading-none text-white">Our Approach</h1>
          <button onMouseEnter={enter} onMouseLeave={leave} className="w-[200px] h-[60px] bg-[#e25b4a] rounded-full text-white mt-10 flex gap-5 items-center justify-center">Read More
            <div className={`${hover ? 'w-8 h-8 text-[1rem]' : 'w-3 h-3 text-opacity-0'} bg-white rounded-full transition-all ease-in duration-300 text-black flex items-center justify-center`}><GoArrowUpRight /></div>
          </button>
        </div>


        <div className="w-full lg:w-1/2 h-[70vh] bg-zinc-200 rounded-2xl mt-10 lg:mt-0 bg-[url('/ourapproachimg.svg')] bg-cover bg-center">

        </div>


      </div>
    </div>
  )
}

export default About
