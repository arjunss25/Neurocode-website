

const Subcompanies = () => {
  return (
    <div className="w-full h-auto lg:h-[70vh] bg-[#f1f1f1] flex lg:flex-row flex-col gap-5 px-5 lg:px-20 items-center py-10 lg:py-0">
      <div className="card-container w-full lg:w-1/2 h-[50vh]">
        <div className="card w-full h-[50vh] lg:h-full bg-black rounded-xl"></div>
      </div>

      <div className="card-container w-full lg:w-1/2 h-auto lg:h-[50vh] flex lg:flex-row flex-col gap-5">
        <div className="card w-full lg:w-1/2 h-[50vh] lg:h-full bg-white rounded-xl"></div>
        <div className="card w-full lg:w-1/2 h-[50vh] lg:h-full bg-white rounded-xl"></div>
      </div>
    </div>
  )
}

export default Subcompanies
