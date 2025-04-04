import { motion } from "framer-motion";
import Technology from "./Technology";
import { FaBriefcase } from "react-icons/fa";
import Communities from "./Communities";

const Home = () => {
  const handleDownload = () => {
    const cvUrl = process.env.PUBLIC_URL + "/Blue_Simple_Professional_CV_Resume.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.setAttribute("download", "David_Ndayiringiye_CV.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (

    <div className='bg-[url("src/images/homebg.png")] mt-36 bg-no-repeat bg-cover iphone:bg-cover iphone:bg-no-repeat'>
      <div className="w-11/12 mx-auto flex justify-end py-4">
        <button
          onClick={handleDownload}
          className="px-6 py-3 bg-blue-400 text-white font-bold rounded-lg shadow-md hover:bg-blue-500 transition duration-300"
        >
          Download CV
        </button>
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
  )
}

export default Home