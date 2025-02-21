import { useState } from "react";
import { Link } from "react-router";
import { FaLongArrowAltRight } from "react-icons/fa";
import Responsibilities from "./Responsibilities";

const IntroductionAbout = () => {
  const par = "Hi, I’m Ndayiringiye david, a passionate Full-Stack Developer with 1 years of experience building robust, scalable, and user-friendly applications. I specialize in both front-end and back-end development, leveraging the latest technologies to create seamless digital experiences."
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div>
    <div className="w-11/12 mx-auto grid grid-cols-2 gap-x-7 sm:grid-cols-1 md:grid-cols-2 ">
      <div>
        <h1 className="capitalize text-4xl text-black font-bold flex items-center py-6 ">hi,
          <img className="w-10" src="/src/images/Pasted_image_18-removebg-preview.png" alt="hi" />
          i'am david  developer</h1>
        <div >
          <p className="text-lx font-medium font-roboto">{isExpanded ? par : par.slice(0, 200) + "..."}</p>
          <div className="my-5">
            <Link to="#" className="border border-white text-blue-800 flex items-center gap-4 w-28 hover:bg-blue-600 hover:text-white rounded-md py-1.5 px-3 font-semibold text-lg " onClick={toggleText}>{isExpanded ? "Less" : "More"}   <span  ><FaLongArrowAltRight /></span> </Link>
          </div>
        </div>
      </div>
      <div>
        <img src="/src/images/Pasted_image_19-removebg-preview.png" alt="img" />
      </div>
    </div>
    <div>
      <Responsibilities />
    </div>
    </div>
  )
}

export default IntroductionAbout