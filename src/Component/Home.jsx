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
      <div className="w-11/12 mx-auto flex justify-end py-4">
        <a
          href="/Blue_Simple_Professional_CV_Resume.pdf"
          download="David_Ndayiringiye_CV.pdf"
          className="px-6 py-3 bg-blue-400 text-white font-bold rounded-lg shadow-md hover:bg-blue-500 transition duration-300"
        >
          Download CV
        </a>

      </div>
      <div className="flex flex-col !items-center justify-center ">
        <motion.div
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 70, duration: 1 }}
          className="w-full"
        >
          <div className="flex justify-start items-center w-11/12  mx-auto gap-3 px-10">
            <p className="uppercase font-serif font-bold text-blue-700 text-2xl fold:hidden md:flex">
              da
              <span className="uppercase font-serif font-bold text-black text-2xl">vi</span>
              d
            </p>
            <p className="uppercase font-serif font-bold text-blue-700 text-2xl">
              ndayi
              <span className="uppercase font-serif font-bold text-black text-2xl">
                ringiye
              </span>
            </p>
          </div>
          <p className="w-11/12 mx-auto px-10">
            I'm a software developer, specializing in Laravel, MySQL, and ReactJs
          </p>
        </motion.div>
        <div>
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
      </div>
      <Technology />
      <Communities />
    </div>
  );
};

export default Home;
