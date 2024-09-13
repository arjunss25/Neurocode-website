import Image from "next/image"


const Workculturesection = () => {
  return (
    <div className="w-full h-auto lg:h-screen flex lg:flex-row flex-col px-5 lg:px-20 pb-20">
      <div className="left-sec w-full lg:w-1/2 h-[60vh] lg:h-full bg-red-200 bg-[url('/aboutimg.svg')] bg-cover bg-center rounded-[1rem]">
        
      </div>


      {/* right-section */}
      <div className="right-sec w-full lg:w-1/2 h-full flex flex-col gap-5 p-2 lg:p-10">
        <h3 className="text-[1.5rem] text-gray-600"><span className="text-black">.</span>Our Culture</h3>
        <h1 className="text-[1.8rem] lg:text-[2.5rem] leading-none font-[500]">We’ve created an environment where everyone feels comfortable and open, but we can have a laugh along the way</h1>
        <p className="text-[1.2rem] leading-[1.5rem] w-full lg:w-[90%] mt-3 text-gray-600">
        We produce good work for good people, and with the idea that staff and the client will be happy throughout the full process. This in return will bring more work our way, whether that's via recommendation or further work from that client.
        </p>
      </div>
    </div>
  )
}

export default Workculturesection
