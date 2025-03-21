import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { Link, Outlet } from "react-router"
import { IoMdCloseCircle } from "react-icons/io";
const Head = () => {
  const [icons, setIcons] = useState(false)
  return (
    <div className="relative  z-10">
      <div className="fixed top-0 right-0 left-0 mb-48">
        <div>
          <h1 className='text-white font-serif uppercase border border-gray-50 font-bold text-3xl text-center py-3 items center w-full bg-blue-400'>portifolio</h1>
        </div>
        <div className="bg-blue-400">
          <nav className="flex justify-between w-11/12 mx-auto bg-blue-400 px-4 py-3 text-center">
            <div className='logo'>
              <Link to="/" className="text-white font-bold uppercase  font-serif">Bio<span className="text-black font-bold ">Status</span></Link>
            </div>
            <div className="flex gap-8 text-bold font-serif uppercase hidden  sm:hidden md:flex">
              <Link className="transition duration-3000 delay-5000 hover:text-white hover:underline underline-offset-2" to="/">home</Link>
              <Link className="transition duration-3000 delay-5000 hover:text-white hover:underline underline-offset-2" to="/contact">contact</Link>
              <Link className="transition duration-3000 delay-5000 hover:text-white hover:underline underline-offset-2" to="/about">a bout me</Link>
              <Link className="transition duration-3000 delay-5000 hover:text-white hover:underline underline-offset-2" to="/project">project</Link>
            </div>
            <div className="grid md:hidden">
              {icons && (
                <div className="grid grid-cols-1 gap-2 bg-blue-500 py-2 px-6 absolute  top-43 capitalize rounded-md shadow-md font-bold cursor-pointer  text-white">
                  <div className="flex justify-end px-2 ">
                    <IoMdCloseCircle onClick={() => setIcons("")} className="text-2xl" />
                  </div>
                  <Link className="transition duration-3000 delay-5000 hover:text-white hover:underline underline-offset-2" to="/">home</Link>
                  <Link className="transition duration-3000 delay-5000 hover:text-white hover:underline underline-offset-2" to="/contact">contact</Link>
                  <Link className="transition duration-3000 delay-5000 hover:text-white hover:underline underline-offset-2" to="/about">a bout me</Link>
                  <Link className="transition duration-3000 delay-5000 hover:text-white hover:underline underline-offset-2" to="/project">project</Link>
                </div>
              )}
            </div>
            <div className="flex md:hidden">
              <IoMenuSharp onClick={() => setIcons(prev => !prev)} className="font-bold text-3xl text-black" />
            </div >
          </nav>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Head