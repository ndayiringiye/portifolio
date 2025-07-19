import { useEffect, useState } from "react";
import { Button, Spin, message } from "antd";
import { DownloadOutlined, LoadingOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import Technology from "./Technology";
import Communities from "./Communities";
import { FaBriefcase } from "react-icons/fa";
import background from "../../public/images/homebg.png";
import profile from "../../public/images/profile.png";
import coding from "../../public/videos/coding.mp4";

const antIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />;

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const response = await fetch("/DavidNdayiringiyeResume_fullstack.pdf");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "DavidNdayiringiyeResume_fullstack.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);

      message.success("CV downloaded successfully!", 2);
    } catch (error) {
      console.error("Error downloading CV:", error);
      message.error("Failed to download CV. Please try again.");
    } finally {
      setDownloading(false);
    }
  };

  if (loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-white">
        <Spin indicator={antIcon} size="large" />
        <p className="mt-4 text-gray-600 font-medium text-lg">Wait for a moment...</p>
      </div>
    );
  }

  return (
    <div
      className="mt-36 bg-no-repeat bg-cover iphone:bg-cover iphone:bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="w-11/12 mx-auto">
        <div className="relative w-full h-screen rounded-2xl overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={coding} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="w-11/12 mx-auto flex justify-end py-4 md:py-6">
              <button
                onClick={handleDownload}
                disabled={downloading}
                className={`flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-xl transition duration-300 text-white font-semibold text-base md:text-lg
      ${downloading
                    ? "bg-blue-300 cursor-not-allowed"
                    : "bg-blue-500  hover:bg-blue-600 shadow-md hover:shadow-lg"
                  }`}
              >
                {downloading ? (
                  <>
                    <LoadingOutlined className="animate-spin text-white text-lg" />
                    Downloading...
                  </>
                ) : (
                  <>
                    <DownloadOutlined className="text-white text-lg" />
                    Download CV
                  </>
                )}
              </button>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-10 lg:px-20">
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
                    Ndayi<span className="text-blue-500">ringiye</span>
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
              <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0">
                <div className="hidden ipad:block relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white">
                  <img
                    src={profile}
                    alt="David Ndayiringiye"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Technology />
      <Communities />
    </div>
  );
};

export default Home;
