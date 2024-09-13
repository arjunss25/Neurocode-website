import Image from "next/image"


const Featured = () => {
  return (
    <div className="w-full pt-0 md:pt-20  bg-[#f1f1f1] flex flex-col items-center">

        <div className="w-full px-5 md:px-20  border-b-[1px] border-zinc-800 pb-10 ">
            <h1 className=" text-[4rem] md:text-[5rem] leading-none">Featured Projects</h1>
            
        </div>

        <div className="cards-main px-20 mt-10">
            <div className="cards w-full flex gap-5 lg:flex-row flex-col">

                <div className="cardcontainer  w-full lg:w-1/3 h-auto lg:h-[50vh] ">

                    {/* <h1 className="absolute left-full bg-red-500 text-[2rem] -translate-x-1/2 -translate-y-1/2 top-1/2 font-semibold w-[20vw]">Global Conclaves</h1> */}

                    <div className="card w-full rounded-xl h-auto bg-[#e25b4a] overflow-hidden">
                        <Image src={'/entrecon.png'} width={1500} height={1000}></Image>
                    </div>
                </div>
                <div className="cardcontainer  w-full lg:w-1/3 h-auto lg:h-[50vh]">
                    <div className="card w-full rounded-xl h-auto bg-[#e25b4a] overflow-hidden">
                    <Image src={'/tracking.png'} width={1500} height={1000}></Image>
                    </div>
                </div>
                <div className="cardcontainer  w-full lg:w-1/3 h-auto lg:h-[50vh]">
                    <div className="card w-full rounded-xl h-auto bg-[#e25b4a] overflow-hidden">
                    <Image src={'/tracking.png'} width={1500} height={1000}></Image>
                    </div>
                </div>
                

            </div>


            {/* cards-2 */}
            <div className="cards w-full flex gap-5 mt-10 lg:flex-row flex-col">

                <div className="cardcontainer  w-full lg:w-1/3 h-auto lg:h-[50vh]">

                    {/* <h1 className="absolute left-full bg-red-500 text-[2rem] -translate-x-1/2 -translate-y-1/2 top-1/2 font-semibold w-[20vw]">Global Conclaves</h1> */}

                    <div className="card w-full rounded-xl h-auto bg-[#e25b4a] overflow-hidden">
                        <Image src={'/entrecon.png'} width={1500} height={1000}></Image>
                    </div>
                </div>
                <div className="cardcontainer  w-full lg:w-1/3 h-auto lg:h-[50vh]">
                    <div className="card w-full rounded-xl h-auto bg-[#e25b4a] overflow-hidden">
                    <Image src={'/tracking.png'} width={1500} height={1000}></Image>
                    </div>
                </div>
                <div className="cardcontainer  w-full lg:w-1/3 h-auto lg:h-[50vh]">
                    <div className="card w-full rounded-xl h-auto bg-[#e25b4a] overflow-hidden">
                    <Image src={'/tracking.png'} width={1500} height={1000}></Image>
                    </div>
                </div>
                

            </div> 
        </div>


        {/* portfolio-redirection-btn */}
        <div className="view-projects-btn w-fit px-8 py-5 bg-[#029acd] rounded-full mt-10 flex items-center gap-3">
            <h1 className="text-white font-medium">View all Projects</h1>
            <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      
    </div>
  )
}

export default Featured
