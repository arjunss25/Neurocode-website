import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";
import Link from "next/link";



const Careerslanding = () => {
  return (
    <div className="w-full h-auto">

        <div className="text-structure px-2 sm:px-10 lg:px-20 mt-[10vh]">


            {["JOIN","OUR TEAM"].map((item,index)=>{
                return(
                    <div className="masker" key={index}>
                    <div className="w-fit leading-[3rem] sm:leading-[4rem] md:leading-[4.8rem] lg:leading-[7rem] flex items-center">
                        {index === 1 && (<motion.div initial={{width: 0}} animate={{width: "10vw"}}  transition={{ease: [0.45, 0, 0.55, 1],duration:1}}  className="w-[19vw] sm:w-[16vw] lg:w-[10vw] h-[2.3rem] sm:h-[3.2rem] md:h-[4rem] lg:h-[5.8rem] bg-[url('/herosm.svg')] bg-cover bg-center rounded-[0.2rem] lg:rounded-[1rem]"></motion.div>)}
                    <h1 key={index} className="main-title-landing uppercase text-[3rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[8rem]  tracking-tight font-semibold">{item}</h1>
                    </div>
                </div>
                )
                
            })}

        </div>

        <div className="border-t-2 border-zinc-500 mt-[4rem] md:mt-[8rem] bg-[#f1f1f1] flex flex-col md:flex-row justify-between items-start md:items-center gap-5 md:gap-0 py-5 px-10 md:px-20">
            {["Innovate Together","Empower Growth"].map((item,index) =>(
                <p key={index} className="text-md font-light ">{item}</p>
            ))}

            <div className="start flex gap-3 items-center">
            <Link href="/contact" className="px-3 md:px-4 py-1 md:py-2 border-2 rounded-full border-zinc-500 font-light">Start the project</Link>

            <Link href="/contact" className="w-8 md:w-10 h-8 md:h-10 rounded-full border-2 border-zinc-500 flex items-center justify-center"><GoArrowUpRight /></Link>
                
            </div>
        </div>
      
    </div> 
  )
}

export default Careerslanding
