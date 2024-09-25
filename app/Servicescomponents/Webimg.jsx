import Image from "next/image"


const Webimg = () => {
  return (
    <div className="w-full h-[50vh] p-5 flex items-center justify-center">
      <div className="img-main w-[80%] h-full rounded-[3rem] flex items-center justify-center">
        <Image src={'/webdevimg.svg'} width={700} height={200} className="rounded-[3rem]" alt="webdev-image"></Image>
      </div>
    </div>
  )
}

export default Webimg
