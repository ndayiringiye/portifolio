import { FaFacebookF } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { MdHome } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router";
import Footer from "../Component/Footer";
// import { Outlet } from "react-router";
const Contact = () => {

  return (
    <div>
      <div className="bg-blue-300 mt-24">
        <div className="flex justify-end gap-4 py-6 px-4 shadow-md cursor-pointer">
          <Link to="https://www.facebook.com/" className="bg-white p-2 text-center rounded-full text-blue-600 "><FaFacebookF /></Link>
          <Link to="https://www.instagram.com/" className="bg-white p-2 text-center rounded-full  "><img src="src/images/image copy.png" alt="instagram" className="w-4 h-4" /></Link>
          <Link to="https://www.whatsapp.com/" className="bg-white p-2 text-center rounded-full text-green-400"><FaWhatsappSquare /></Link>
          <Link to="https://www.linkedin.com/" className="bg-white p-2 text-center rounded-full text-blue-800"><FaLinkedinIn /></Link>
          <Link to="https://github.com/ndayiringiye" className="bg-white p-2 text-center rounded-full"><BsGithub /></Link>
        </div>
        <div >
          <div className="grid grid-cols-3 gap-x-6 w-11/12 mx-auto py-10 shadow-md sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="grid grid-row-3 gap-2 mt-46  w-9 py-2 px-3">

              <Link to="/" className="bg-white p-2 text-center rounded-full text-xl hover:bg-black hover:text-white font-bold"><MdHome /></Link>
              <Link to="https://mail.google.com/mail/u/1/#inbox" className="bg-white p-2 text-center rounded-full text-xl hover:bg-black hover:text-white font-bold"><TfiEmail /></Link>
              <Link to="" className="bg-white p-2 text-center rounded-full text-xl hover:bg-black hover:text-white font-bold"><FaTwitter /></Link>
            </div>
            <div >
              <h1 className="text-white font-semibold text-xl leading-5">Let's <span className="leading-5 text-xl text-black font-semibold">taik</span></h1>
              <p className="py-4 font-sans-serif">To request aquout or want to meet up for build projects, contact me directly or fill out form and i will get back to soon.</p>
              <form className="hover:overflow-y-auto hover:w-72 hover:h-52 hover:px-3  " >
                <label htmlFor="name">Full Name</label><br />
                <input className="py-1 outline-none px-3 rounded-md shadow-md" type="text" name="name" /><br />
                <label htmlFor="email">Email</label><br />
                <input className="py-1 outline-none px-3 rounded-md shadow-md" type="email" placeholder="Enter your email account" /><br />
                <label htmlFor="messsage" className=" ">Messsage</label><br />
                <textarea name="message" id="message" placeholder="write your message here..." className="py-6 outline-none px-8 shadow-md rounded-md" /><br />
                <button className="bg-blue-400 py-2 px-3 rounded-md shadow-md cursor-pointer font-bold text-black hover:text-white hover:bg-black">send message</button>
              </form>

            </div>
            <div>
              <img src="public/images/Pasted_image_15-removebg-preview.png" alt="image" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact