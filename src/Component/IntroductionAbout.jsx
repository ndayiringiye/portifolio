import { useState } from "react";
import { Link } from "react-router-dom"; // Fixed import
import { FaLongArrowAltRight } from "react-icons/fa";
import Responsibilities from "./Responsibilities";
import { motion } from "framer-motion";
// import me from "../../public/images/Pasted_image_19-removebg-preview.png";
// import hi from "../../public/images/Pasted_image_18-removebg-preview.png";

// Simple Card Component to replace Flowbite
const Card = ({ children, imgSrc, imgAlt, className = "" }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      {imgSrc && (
        <img src={imgSrc} alt={imgAlt} className="w-full h-48 object-cover" />
      )}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

const IntroductionAbout = () => {
  const par = "Hi, I'm Ndayiringiye david, a passionate Full-Stack Developer with 1 years of experience building robust, scalable, and user-friendly applications. I specialize in both front-end and back-end development, leveraging the latest technologies to create seamless digital experiences."
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <p className="text-lg text-gray-700 leading-relaxed">{par}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          className="max-w-sm"
          imgAlt="Technology acquisitions"
          imgSrc="/images/blog/image-1.jpg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </Card>
        
        <Card
          className="max-w-sm"
          imgAlt="Technology acquisitions"
          imgSrc="/images/blog/image-1.jpg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </Card>
        
        <Card
          className="max-w-sm"
          imgAlt="Technology acquisitions"
          imgSrc="/images/blog/image-1.jpg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </Card>
      </div>
    </div>
  )
}

export default IntroductionAbout;