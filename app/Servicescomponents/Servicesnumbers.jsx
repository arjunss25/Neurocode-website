

const Servicesnumbers = () => {
  return (
    <div className="w-full h-auto lg:h-screen flex lg:flex-row flex-col p-5 lg:p-20">

        {/* left-section */}
      <div className="left-section w-full lg:w-1/2 h-auto lg:h-full">
        <h1 className="text-[4rem] md:text-[5rem] leading-none">Our Numbers</h1>
      </div>


      {/* right-section */}
      <div className="right-section w-full lg:w-1/2 h-auto lg:h-full">
        <div className="cards-main flex flex-col flex-wrap gap-5 mt-20 justify-center items-center">
            <div className="main-one flex sm:flex-row flex-col gap-5">
                <div className="card w-[80vw] sm:w-[40vw] lg:w-[22vw] h-[32vh] bg-[#029acd] text-white rounded-[1rem] px-8 pt-5 pb-8 flex flex-col justify-between items-start">
                    <h1 className="text-[4rem] font-semibold">7+</h1>
                    <h3 className="text-[1rem]">Years of Experience</h3>
                </div>
                <div className="card w-[80vw] sm:w-[40vw] lg:w-[22vw] h-[32vh] bg-[#029acd] text-white rounded-[1rem] px-8 pt-5 pb-8 flex flex-col justify-between items-start">
                    <h1 className="text-[4rem] font-semibold">300+</h1>
                    <h3 className="text-[1rem]">Projects</h3>
                </div>
            </div>
            <div className="main-two flex sm:flex-row flex-col gap-5">
                <div className="card w-[80vw] sm:w-[40vw] lg:w-[22vw] h-[32vh] bg-[#029acd] text-white rounded-[1rem] px-8 pt-5 pb-8 flex flex-col justify-between items-start">
                    <h1 className="text-[4rem] font-semibold">100%</h1>
                    <h3 className="text-[1rem]">Client Satisfaction</h3>
                </div>
                <div className="card w-[80vw] sm:w-[40vw] lg:w-[22vw] h-[32vh] bg-[#029acd] text-white rounded-[1rem] px-8 pt-5 pb-8 flex flex-col justify-between items-start">
                    <h1 className="text-[4rem] font-semibold">100%</h1>
                    <h3 className="text-[1rem]">Client Retention</h3>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Servicesnumbers
