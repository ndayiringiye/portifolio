import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { Link, Outlet } from "react-router"
const Head = () => {
 const[icons, setIcons] = useState(false)
  return (
    <div className="relative">
      <div className="fixed top-0  right-0 left-0 mb-48">

    
      <div >
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
               <div className="grid grid-cols-1 gap-4 bg-black py-2 px-6 absolute  md:top-1/2 sm:top-96  rounded-md shadow-md font-bold cursor-point  text-white">
               <Link className="transition duration-3000 delay-5000 hover:text-white hover:underline underline-offset-2" to="/">home</Link>
               <Link className="transition duration-3000 delay-5000 hover:text-white hover:underline underline-offset-2" to="/contact">contact</Link>
               <Link className="transition duration-3000 delay-5000 hover:text-white hover:underline underline-offset-2" to="/about">a bout me</Link>
               <Link className="transition duration-3000 delay-5000 hover:text-white hover:underline underline-offset-2" to="/project">project</Link>
             </div>
            )}
          </div>
          <div className="flex md:hidden">
          <IoMenuSharp onClick={() => setIcons(prev => !prev)} className="font-bold text-3xl text-black"/>
          </div >
         
        </nav>
      </div>
      </div>
      <div>
        <Outlet />


      </div>
    </div>
  )
}

export default Head