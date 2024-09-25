import Link from "next/link";
import { RiLinkedinFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { SiFacebook } from "react-icons/si";

const Contactlinks = () => {
  return (
    <div className="w-full h-auto px-5 lg:px-20 pb-20">
      <div className="cards-main w-full h-auto flex lg:flex-row flex-col justify-center items-center gap-5">

        <Link href={''} className="card w-[80vw] lg:w-[20vw] h-full bg-zinc-300 rounded-[2rem] p-5 flex flex-col justify-between hover:bg-[#029acd] hover:text-white">
            <h1 className="text-[1.5rem]">Linkedin</h1>
            <div className="w-full flex justify-end text-[3rem]">
                <RiLinkedinFill />
            </div>
        </Link>

        <Link href={'https://www.instagram.com/neurocode_intl?igsh=MTN6Mnk5MDIxZTNvbw%3D%3D&utm_source=qr'} className="card w-[80vw] lg:w-[20vw] h-full bg-zinc-300 rounded-[2rem] p-5 flex flex-col justify-between hover:bg-[#029acd] hover:text-white">
            <h1 className="text-[1.5rem]">Intagram</h1>
            <div className="w-full flex justify-end text-[3rem]">
                <FaInstagram />
            </div>
        </Link>


        <Link href={''} className="card w-[80vw] lg:w-[20vw] h-full bg-zinc-300 rounded-[2rem] p-5 flex flex-col justify-between hover:bg-[#029acd] hover:text-white">
            <h1 className="text-[1.5rem]">Facebook</h1>
            <div className="w-full flex justify-end text-[3rem]">
                <SiFacebook />
            </div>
        </Link>

      </div>
    </div>
  )
}

export default Contactlinks
