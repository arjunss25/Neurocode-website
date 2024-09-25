import { GoDotFill } from "react-icons/go";

const Websitedev = () => {
  return (
    <div className="w-full h-auto  p-5 lg:p-20 flex lg:flex-row flex-col gap-10">
        
        {/* left-section */}
        <div className="left-sec w-full lg:w-1/2 h-full">
            <h4 className="flex items-center gap-2 text-[1.5rem] text-gray-600"><span className="text-black"><GoDotFill /></span>Web Development</h4>
            <h1 className="text-[2rem] lg:text-[3rem] leading-none mt-5 capitalize">We craft visually appealing websites that leave a lasting impression.</h1>
        </div>


        {/* right-section */}
        <div className="right-sec w-full lg:w-1/2 h-full pt-5 lg:pt-20 text-justify">
        <p className="text-[1.1rem]">A website is a crucial marketing asset for any brand, offering the ability to reach a vast audience quickly with engaging content. To maximize its effectiveness, it&apos;s vital that your website design and development are straightforward, polished, and user-centric, ensuring a seamless and enjoyable experience for visitors.</p>


        <p className="text-[1.1rem] mt-5">Whether you&apos;re launching a new venture or enhancing an existing brand, Shape dedicates careful attention to every phase of website creation. From initial research and planning to design, development, and comprehensive testing, we ensure that your site remains true to your brand and meets your objectives.</p>

        </div>
    </div>
  )
}

export default Websitedev
