// import { useState } from "react";
// import { Link } from "react-router-dom"; 
// import { FaLongArrowAltRight } from "react-icons/fa";
// import Responsibilities from "./Responsibilities";
// import { motion } from "framer-motion";
// import backend from "../../public/images/backend.png"
// import frontend from "../../public/images/frontend.png"
// import deployment from "../../public/images/deployment.png"
// const Card = ({ children, imgSrc, imgAlt, className = "" }) => {
//   return (
//     <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
//       {imgSrc && (
//         <img src={imgSrc} alt={imgAlt} className="w-full h-48 object-cover" />
//       )}
//       <div className="p-6">
//         {children}
//       </div>
//     </div>
//   );
// };

// const IntroductionAbout = () => {
//   const par = "Hi, I'm Ndayiringiye david, a passionate Full-Stack Developer with 1 years of experience building robust, scalable, and user-friendly applications. I specialize in both front-end and back-end development, leveraging the latest technologies to create seamless digital experiences."
//   const [isExpanded, setIsExpanded] = useState(false);
  
//   const toggleText = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div className="">
//     <div className="w-11/12 mx-auto bg-blue-400 border border-gray-900 py-10 px-4 border-b-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-gray-100 hover:text-gray-800">
//       <div className="mb-8">
//         <p className="text-lg text-gray-700  leading-relaxed">{par}</p>
//       </div>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         <Card
//           className="max-w-sm"
//           imgAlt="Technology acquisitions"
//           imgSrc={backend}
//         >
//           <h5 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
//             backend engineering
//           </h5>
//           <p className="font-normal text-gray-700">
//             I specialize in building robust APIs using Node.js, Express, Java, Python, and MongoDB. My experience includes designing scalable backend architectures, implementing secure authentication, and integrating databases to deliver high-performance solutions.
//           </p>
//         </Card>
        
//         <Card
//           className="max-w-sm"
//           imgAlt="Front-end engineering"
//           imgSrc={frontend}
//         >
//           <h5 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
//             front-end engineering
//           </h5>
//           <p className="font-normal text-gray-700">
//             Experience in HTML, CSS, Tailwind CSS, React.js, and PHP. I build responsive and interactive user interfaces, ensuring seamless user experiences across devices.
//           </p>
//         </Card>
        
//         <Card
//           className="max-w-sm"
//           imgAlt="Technology acquisitions"
//           imgSrc={deployment}
//         >
//           <h5 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
//             ui design & deployment
//           </h5>
//           <p className="font-normal text-gray-700">
//             Experienced in building intuitive and visually appealing interfaces using Figma and modern design principles. I focus on creating user-centric designs that enhance usability and accessibility, ensuring a cohesive look and feel across applications.
//           </p>
//         </Card>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default IntroductionAbout;