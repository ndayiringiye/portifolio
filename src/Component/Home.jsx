import { FaDownload } from "react-icons/fa6";
import { motion } from "framer-motion";
import Technology from "./Technology";
import { FaBriefcase } from "react-icons/fa";

const Home = () => {
  return (

    <div className='bg-[url("src/images/homebg.png")] mt-36 bg-no-repeat bg-cover iphone:bg-cover iphone:bg-no-repeat'>
      <h1 className=' flex justify-end  uppercase font-serif font-bold text-blue-700 text-2xl py-6 mx-10'>Bio<span className='text-black uppercase'>Status</span></h1>
      <div className="flex flex-col !items-center justify-center ">
        <motion.div
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 70, duration: 1 }}
          className="w-full"
        >
          <div className="flex justify-start items-center w-11/12 mx-auto gap-3 px-10">
            <p className="uppercase font-serif font-bold text-blue-700 text-2xl">
              da
              <span className="uppercase font-serif font-bold text-black text-2xl">
                vi
              </span>
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
      <h1 className="font-bold text-3xl text-gray-800">Professional Experience</h1>
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
    </div>
  )
}

export default Home