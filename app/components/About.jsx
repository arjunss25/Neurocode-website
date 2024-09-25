'use client'
import { GoArrowUpRight } from "react-icons/go";
import './About.css'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { useState } from "react"
import Link from "next/link";

const About = () => {
  const [hover, sethover] = useState(false)
  const textRef = useRef(null);

  let enter = () => {
    sethover(true)
  }
  let leave = () => {
    sethover(false)
  }

  useEffect(() => {
    const text = textRef.current;
    
    // Split the text into words
    const words = text.innerText.split(' ');
    text.innerHTML = words.map(word => `<span class="word"><span class="word-inner">${word}</span></span>`).join(' ');

    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: text,
        start: "top 80%", 
        end: "top 20%", 
        scrub: 0.3, 
      }
    });

    
    tl.fromTo(
      '.word-inner',
      {
        y: '100%',
        opacity: 0
      },
      {
        y: '0%',
        opacity: 1,
        stagger: 0.005, 
        ease: 'power2.out'
      }
    );

  }, []);

  return (
    <div className="w-full px-5 py-5 md:px-20 md:py-20 bg-black">
      <h1 ref={textRef} className="text-white text-[1rem] md:text-[1.8rem] leading-none mt-10 md:mt-0">
        We are a leading IT company in Kerala that has been established to give the optimum level of IT services to industrial, commercial, and residential customers nationwide. With a proven track record of success, we have been at the forefront of IT innovation for seven years
      </h1>

      <div className="w-full border-t-[1px] border-zinc-100 mt-20 pt-20 flex lg:flex-row flex-col ">
        <div className="w-full md:w-1/2">
          <h1 className="text-[4rem] md:text-[5rem] leading-[5rem] text-white">Our Approach</h1>
          <p className="text-white mt-10 text-justify w-full lg:w-[90%]">
            Our approach is rooted in understanding your unique needs, delivering tailored web and app solutions that drive results. We combine cutting-edge technology with creative design to craft user-friendly, scalable, and efficient digital experiences. Our team is dedicated to ensuring seamless collaboration and transparency throughout the development process. We prioritize innovation and excellence in every project, ensuring that your business stands out in a competitive landscape. Trust us to turn your vision into reality, with a focus on quality and client satisfaction.
          </p>
          <Link href="/about" onMouseEnter={enter} onMouseLeave={leave} className="w-[200px] h-[60px] bg-[#e25b4a] rounded-full text-white mt-10 flex gap-5 items-center justify-center">Read More
            <div className={`${hover ? 'w-8 h-8 text-[1rem]' : 'w-3 h-3 text-opacity-0'} bg-white rounded-full transition-all ease-in duration-300 text-black flex items-center justify-center`}><GoArrowUpRight /></div>
          </Link>
        </div>

        <div className="w-full lg:w-1/2 h-[70vh] bg-zinc-200 rounded-2xl mt-10 lg:mt-0 bg-[url('/ourapproachimg.svg')] bg-cover bg-center">
        </div>
      </div>
    </div>
  )
}

export default About