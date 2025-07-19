import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { Link } from "react-router"
import { IoMdCloseCircle } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion"; 


const Head = () => {
  const [icons, setIcons] = useState(false)
  return (
    <div className="relative z-50 ">
      <div className="fixed top-0 right-0 left-0 z-50">
        <h1 className="text-white font-serif uppercase border border-gray-50 font-bold text-3xl text-center py-3 bg-blue-400">
          Portfolio
        </h1>
        <div className="bg-blue-400">
          <nav className="flex justify-between w-11/12 mx-auto bg-blue-400 px-4 py-3">
            <div className="logo">
              <Link to="/" className="text-white font-bold capitalize text-3xl font-serif">
                dav<span className="text-black font-bold">id</span>
              </Link>
            </div>
            <div className="hidden sm:flex gap-8 font-serif uppercase">
              <Link className="hover:text-white hover:underline underline-offset-2" to="/">Home</Link>
              <Link className="hover:text-white hover:underline underline-offset-2" to="/contact">Contact</Link>
              <Link className="hover:text-white hover:underline underline-offset-2" to="/about">About Me</Link>
              <Link className="hover:text-white hover:underline underline-offset-2" to="/project">Projects</Link>
            </div>
            <div className="z-10 sm:hidden relative">
              <IoMenuSharp onClick={() => setIcons(!icons)} className="text-3xl text-black cursor-pointer iphone:text-3xl ipad:text-5xl ipad:front-bold  ipad:px-2 flex sm:hidden" />
              {icons && (
               <AnimatePresence>
               {icons && (
                 <motion.div
                   initial={{ x: "100%", opacity: 0 }}
                   animate={{ x: 0, opacity: 1 }}
                   exit={{ x: "100%", opacity: 0 }}
                   transition={{ duration: 0.4, ease: "easeInOut" }}
                   className="absolute right-0 top-10 bg-blue-400 w-40 py-2 rounded-md shadow-md text-white z-50"
                 >
                   <div className="flex justify-end px-2">
                     <IoMdCloseCircle
                       onClick={() => setIcons(false)}
                       className="text-2xl cursor-pointer hover:text-gray-200 transition"
                     />
                   </div>
                   <div className="flex flex-col items-center gap-2 py-2 font-bold cursor-pointer">
                     <Link
                       className="hover:text-gray-200 hover:underline"
                       to="/"
                       onClick={() => setIcons(false)}
                     >
                       Home
                     </Link>
                     <Link
                       className="hover:text-gray-200 hover:underline"
                       to="/contact"
                       onClick={() => setIcons(false)}
                     >
                       Contact
                     </Link>
                     <Link
                       className="hover:text-gray-200 hover:underline"
                       to="/about"
                       onClick={() => setIcons(false)}
                     >
                       About Me
                     </Link>
                     <Link
                       className="hover:text-gray-200 hover:underline"
                       to="/project"
                       onClick={() => setIcons(false)}
                     >
                       Project
                     </Link>
                   </div>
                 </motion.div>
               )}
             </AnimatePresence>
              )}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Head