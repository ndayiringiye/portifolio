import { useEffect, useState } from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import Technology from "./Technology";
import { FaBriefcase } from "react-icons/fa";
import Communities from "./Communities";
import background from "../../public/images/homebg.png"

const antIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />;

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <Spin
          indicator={antIcon}
          tip="Wait for moment"
          size="large"
        />
      </div>
    );
  }

  return (
    <div
      className="mt-36 bg-no-repeat bg-cover iphone:bg-cover iphone:bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="w-11/12 mx-auto rounded-md ">
        <div className="relative w-full h-screen overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="src/videos/4389357-uhd_3840_2024_30fps (1).mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="w-11/12 mx-auto flex justify-end py-4">
              <a
                href="/Blue_Simple_Professional_CV_Resume.pdf"
                download="David_Ndayiringiye_CV.pdf"
                className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-300 font-sans"
              >
                Download CV
              </a>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center flex-grow px-4 md:px-10 lg:px-20">
              <motion.div
                initial={{ x: "-100vw", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 70, duration: 1 }}
                className="w-full md:w-1/2 text-center md:text-left"
              >
                <div className="flex flex-col md:flex-row justify-start items-center gap-3 mb-4">
                  <p className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 font-['Montserrat'] tracking-wide">
                    👋 Hi, I'm <span className="text-gray-200">David</span>
                  </p>
                </div>
                <div className="mb-6">
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200 font-['Montserrat'] tracking-tight">
                    Ndayi<span className="text-blue-600">ringiye</span>
                  </p>
                </div>
                <p className="text-gray-200 text-lg md:text-xl lg:text-2xl mb-6 font-['Open_Sans'] leading-relaxed">
                  I am a Full Stack Web Developer with over 2.5 years of hands-on experience in building
                  and deploying responsive applications. My expertise with the MERN stack, along with
                  proficiency in Java and Python, allows me to effectively address challenges. I practice
                  clean UI/UX design and enjoy collaborating on innovative projects, particularly in
                  blockchain technology. I'm passionate about meaningful community contribution.
                </p>
                <div className="flex gap-4 mt-8">
                  <button className="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition duration-300 shadow-md">
                    View Projects
                  </button>
                  <button className="px-6 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition duration-300">
                    Contact Me
                  </button>
                </div>
              </motion.div>
              <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
                <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white">
                  <img
                    src="src/images/793aa9391928a9cdade7be11d056d529-removebg-preview copy.png"
                    alt="David Ndayiringiye"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
        <div className="flex flex-col items-center mt-28">
          <div className=" fold:px-10 iphone:px-5 ">
            <h1 className="font-bold text-3xl text-gray-800">Professional Experience</h1>
          </div>
          <div className="bg-blue-400 text-white px-8 py-5 rounded-lg shadow-lg mt-6 w-11/12 max-w-2xl">
            <div className="flex justify-between items-center">
              <p className="text-sm">May 2023 - Present</p>
              <FaBriefcase className="text-xl" />
            </div>
            <h2 className="font-semibold text-lg mt-2">Software Engineer @ Alight Rwa</h2>
            <p className="text-base mt-1">
              Full-stack web developer for software applications using Laravel, React.js, and Tailwind CSS.
              <br />
              Mentor at Alight Coding.
            </p>
          </div>
        </div>
      </div>
      <Technology />
      <Communities />
    </div>
  );
};

export default Home;
