import Image from "next/image"
import Link from "next/link"
import { GoArrowUpRight } from "react-icons/go";


const Footer = () => {
  return (
    <div className="w-full h-auto lg:h-screen bg-black px-5 lg:px-20  pt-10 lg:pt-20 pb-0">


      {/* top-section */}

      <div className="top-sec w-full h-auto lg:h-[50vh] flex lg:flex-row flex-col">

        <div className="left-sec w-full lg:w-1/2w-full lg:w-1/2 h-full">
          <h1 className="text-[3rem] text-white leading-none">Relax. We've got you.</h1>
            <div className="start flex gap-3 items-center mt-8 lg-mt-0">
                <div className="px-3 md:px-4 py-1 md:py-2 border-2 rounded-full border-white font-light text-white">Start the project</div>
                <div className="w-8 md:w-10 h-8 md:h-10 rounded-full border-2 border-white flex items-center justify-center text-white">
                    <GoArrowUpRight />
                </div>
            </div>
        </div>
        <div className="right-sec w-full lg:w-1/2 h-full flex justify-end mt-5 lg:mt-0">
        <div className="w-full lg:w-1/2 flex mt-5 justify-start lg:justify-center">
            <div className="links text-white flex flex-col gap-2 text-[2rem] leading-none ">
                <Link href="" className="text-[1.5rem] font-medium">Home</Link>
                <Link href="" className="text-[1.5rem] font-medium">About</Link>
                <Link href="" className="text-[1.5rem] font-medium">Services</Link>
                <Link href="" className="text-[1.5rem] font-medium">Portfolio</Link>
                <Link href="" className="text-[1.5rem] font-medium">Careers</Link>
                <Link href="" className="text-[1.5rem] font-medium">Contact us</Link>
            </div>
        </div>
        </div>

      </div>



      {/* bottom-section */}
      <div className="bottom-sec w-full h-auto lg:h-[38vh] flex items-center leading-none justify-center items-end  mt-10 lg:mt-0 py-2 ">
        {/* <h1 className="text-[15vw] lg:text-[15rem] h-full">neurocode.</h1> */}
        <Image src={'/footer-logo.svg'} width={1500} height={100}></Image>
      </div>



      
    </div>
  )
}

export default Footer
