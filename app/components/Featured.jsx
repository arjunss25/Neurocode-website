import { useEffect, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GoArrowUpRight } from "react-icons/go";
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const Featured = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.fromTo(
        '.cardcontainer',
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5, 
          stagger: 0.3, 
          scrollTrigger: {
            trigger: '.cards-main',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1, 
          },
        }
      );

      gsap.fromTo(
        '.view-projects-btn',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5, 
          delay: 1, 
          scrollTrigger: {
            trigger: '.view-projects-btn',
            start: 'top 80%',
            end: 'bottom top',
            scrub: 1, 
          },
        }
      );
    }
  }, []);

  
  const [hover, sethover] = useState(false)

  let enter = ()=>{
    sethover(true)
  }
  let leave = ()=>{
    sethover(false)
  }


  return (
    <div className="w-full pt-0 md:pt-20 bg-[#f1f1f1] flex flex-col items-center">
      <div className="w-full px-5 md:px-20 border-b-[1px] border-zinc-800 pb-10">
        <h1 className="text-[4rem] md:text-[5rem] leading-none">Featured Projects</h1>
      </div>

      <div className="cards-main px-20 mt-10">
        <div className="cards w-full flex gap-5 lg:flex-row flex-col">
          <div className="cardcontainer w-full lg:w-1/3 h-auto lg:h-[50vh]">
            <div className="card w-full rounded-xl h-auto bg-[#e25b4a] overflow-hidden">
              <Image src={'/entrecon.png'} width={1500} height={1000} alt="Project 1" />
            </div>
          </div>
          <div className="cardcontainer w-full lg:w-1/3 h-auto lg:h-[50vh]">
            <div className="card w-full rounded-xl h-auto bg-[#e25b4a] overflow-hidden">
              <Image src={'/portfolio/hstcae.png'} width={1500} height={1000} alt="Project 2" />
            </div>
          </div>
          <div className="cardcontainer w-full lg:w-1/3 h-auto lg:h-[50vh]">
            <div className="card w-full rounded-xl h-auto bg-[#e25b4a] overflow-hidden">
              <Image src={'/portfolio/aromatic.jpg'} width={1500} height={1000} alt="Project 3" />
            </div>
          </div>
        </div>

        <div className="cards w-full flex gap-5 mt-10 lg:flex-row flex-col">
          <div className="cardcontainer w-full lg:w-1/3 h-auto lg:h-[50vh]">
            <div className="card w-full rounded-xl h-auto bg-[#e25b4a] overflow-hidden">
              <Image src={'/portfolio/hurelife.png'} width={1500} height={1000} alt="Project 4" />
            </div>
          </div>
          <div className="cardcontainer w-full lg:w-1/3 h-auto lg:h-[50vh]">
            <div className="card w-full rounded-xl h-auto bg-[#e25b4a] overflow-hidden">
              <Image src={'/portfolio/riderzpal.png'} width={1500} height={1000} alt="Project 5" />
            </div>
          </div>
          <div className="cardcontainer w-full lg:w-1/3 h-auto lg:h-[50vh]">
            <div className="card w-full rounded-xl h-auto bg-[#e25b4a] overflow-hidden">
              <Image src={'/tracking.png'} width={1500} height={1000} alt="Project 6" />
            </div>
          </div>
        </div>
      </div>

      {/* <div onMouseEnter={enter} onMouseLeave={leave} className="view-projects-btn w-fit px-8 py-5 bg-[#029acd] rounded-full mt-10 flex items-center gap-3">
        <h1  className="text-white font-medium">View all Projects</h1>
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </div> */}

      <Link href="/about" onMouseEnter={enter} onMouseLeave={leave} className="w-[200px] h-[60px] bg-[#029acd] rounded-full text-white mt-10 flex gap-5 items-center justify-center">View all Projects
            <div className={`${hover ? 'w-8 h-8 text-[1rem]' : 'w-3 h-3 text-opacity-0'} bg-white rounded-full transition-all ease-in duration-300 text-black flex items-center justify-center`}><GoArrowUpRight /></div>
          </Link>
    </div>
  );
};

export default Featured;
