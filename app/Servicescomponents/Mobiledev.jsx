import { GoDotFill } from "react-icons/go";

const Mobiledev = () => {
  return (
    <div className="w-full h-auto  p-5 lg:p-20 flex lg:flex-row flex-col gap-10">
        
        {/* left-section */}
        <div className="left-sec w-full lg:w-1/2 h-full">
            <h4 className="flex items-center gap-2 text-[1.5rem] text-gray-600"><span className="text-black"><GoDotFill /></span>Mobile App Development</h4>
            <h1 className="text-[2rem] lg:text-[3rem] leading-none mt-5">Designing Mobile Apps That Stand Out and Delight Users</h1>
        </div>


        {/* right-section */}
        <div className="right-sec w-full lg:w-1/2 h-full pt-5 lg:pt-20 text-justify">
            <p className="text-[1.1rem]">In the competitive landscape of mobile technology, a high-quality app can significantly enhance your brand's presence and customer engagement. At Shape, we focus on creating mobile apps that blend sleek design with robust functionality. Our process begins with understanding your unique needs and target audience, ensuring that the final product offers an intuitive user experience and integrates the latest technological advancements.</p>

            <p className="text-[1.1rem] mt-5">From initial concept through to launch, we meticulously handle every stage of the app development journey. We prioritize clear communication and iterative feedback, allowing us to align the app with your brand's vision and objectives. By embracing agile development practices, we ensure a streamlined development process, delivering an app that excels in performance, usability, and adaptability across various devices.</p>
        </div>
    </div>
  )
}

export default Mobiledev
