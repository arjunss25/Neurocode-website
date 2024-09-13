import React from 'react'

const Directorsmessage = () => {
  return (
    <div className='w-full h-auto lg:h-[40vh] px-5 lg:px-20 pb-20 lg:pb-0'>
      
        <div className="card-main w-full h-full flex lg:flex-row flex-col gap-20">
            {/* <div className="card w-full lg:w-[40vw] h-[20vh] lg:h-[30vh] bg-red-500 rounded-[2rem]">

            </div> */}
            {/* <div className="card w-full lg:w-[40vw] h-[20vh] lg:h-[30vh] bg-red-500">

            </div> */}

            <div className="card">
              <div className="top flex">
                <div className="top-left w-[25vw] h-[5vh] rounded-tl-[50px] rounded-tr-[39px] bg-red-500"></div>
                <div className="top-right  w-[15vw] h-[5vh] bg-[#f1f1f1] rounded-tr-[39px] shadow-custom-dropshadow  rounded-br-[50px] rounded-bl-[39px]"></div>
              </div>
              <div className="bottom w-[40vw] h-[20vh] bg-red-500 rounded-tr-[50px]  rounded-br-[50px] rounded-bl-[50px]"></div>
            </div>
        </div>


    </div>
  )
}

export default Directorsmessage
