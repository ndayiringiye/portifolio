import { FaFacebookF } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { MdHome } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="bg-blue-300">
      <div className="flex justify-end gap-4 py-6 px-4 shadow-md">
        <a href="" className="bg-white p-2 text-center rounded-full text-blue-600 "><FaFacebookF /></a>
        <a href="" className="bg-white p-2 text-center rounded-full text-indigo-300 text-violete-400 text-purple-950"><FaInstagramSquare /></a>
        <a href="" className="bg-white p-2 text-center rounded-full text-green-400"><FaWhatsappSquare /></a>
        <a href="" className="bg-white p-2 text-center rounded-full text-blue-800"><FaLinkedinIn /></a>
        <a href="" className="bg-white p-2 text-center rounded-full"><BsGithub /></a>
      </div>
      <div className="grid grid-cols-3 gap-x-6 w-11/12 mx-auto py-10">
        <div>

          <a href=""><MdHome /></a>
          <a href=""><TfiEmail /></a>
          <a href=""><FaTwitter /></a>
        </div>
        <div>
          <h1>let's<span>taik</span></h1>
          <p>to request aquout or want to meet up for build projects, contact me directly or fill out form and i will get back to soon</p>
          <form >
            <label htmlFor="name">full Name</label><br />
            <input type="text" name="name" /><br />
            <label htmlFor="email">email</label><br />
            <input type="email" placeholder="Enter your email account" /><br />
            <label htmlFor="messsage">messsage</label><br />
            <textarea name="message" id="message" placeholder="write your message here..." /><br />
            <button>send message</button>
          </form>
        </div>
        <div>
          <img src="public/images/Pasted_image_15-removebg-preview.png" alt="image" />
        </div>
      </div>
    </div>
  )
}

export default Contact