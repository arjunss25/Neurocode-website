import Image from 'next/image'
import React from 'react'

const Messagecard = ({ image, name, designation, message }) => {
  return (
    <div className="w-[40vw] h-[25vh] lg:w-[30vw] lg:h-[30vh] rounded-[2rem] px-3 py-2 bg-black flex flex-col justify-center items-center text-center text-white">
      <Image 
    src={image} 
    alt={name} 
    width={64} // Corresponds to w-16 (16 * 4 = 64)
    height={64} // Corresponds to h-16 (16 * 4 = 64)
    className="rounded-full mb-3 bg-red-200" 
/>
      <p className="text-xs">{message}</p>
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className="text-sm mb-2">{designation}</p>
      
    </div>
  )
}

export default Messagecard
