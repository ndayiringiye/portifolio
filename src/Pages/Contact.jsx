import { FaFacebookF } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { MdHome } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router";
import { motion } from "motion/react"
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, User, Send, CheckCircle } from "lucide-react";
import { Toaster, toast } from "react-hot-toast";
import paster from "../../public/images/Pasted_image_15-removebg-preview.png";
import instagram from "../../public/images/image copy.png";


const Contact = () => {
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_pje5zdb",
        "template_xkojm4j",
        e.target,
        "wkrdCbu66hKdjpCA2"
      )
      .then(
        () => {
          toast.success(
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-500" />
              Message has been sent successfully!
            </div>
          );
          e.target.reset();
        },
        (error) => {
          toast.error("Something went wrong. Try again.");
          console.error(error);
        }
      )
      .finally(() => setLoading(false));
  };
  return (
    <div>
      <div className="bg-blue-300 ipad:mt-32 sm:mt-24 mt-24">
        <div className="flex justify-end gap-4 py-6 px-4 shadow-md cursor-pointer">
          <Link to="https://www.facebook.com/" target="_blank" className="bg-white p-2 text-center rounded-full text-blue-600 "><FaFacebookF /></Link>
          <Link to="https://www.instagram.com/" target="_blank" className="bg-white p-2 text-center rounded-full  "><img src={instagram} alt="instagram" className="w-4 h-4" /></Link>
          <Link to="https://www.whatsapp.com/" target="_blank" className="bg-white p-2 text-center rounded-full text-green-400"><FaWhatsappSquare /></Link>
          <Link to="https://www.linkedin.com/" target="_blank" className="bg-white p-2 text-center rounded-full text-blue-800"><FaLinkedinIn /></Link>
          <Link to="https://github.com/ndayiringiye" target="_blank" className="bg-white p-2 text-center rounded-full"><BsGithub /></Link>
        </div>
        <div >
          <div className="grid grid-cols-3 gap-x-6 w-11/12 mx-auto py-10 iphone:grid-cols-1  shadow-md sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="grid grid-row-3 gap-2 mt-46  w-9 py-2 px-3">
              <Link to="/" className="bg-white p-2 text-center rounded-full text-xl hover:bg-black hover:text-white font-bold"><MdHome /></Link>
              <Link to="https://mail.google.com/mail/u/1/#inbox" target="_blank" className="bg-white p-2 text-center rounded-full text-xl hover:bg-black hover:text-white font-bold"><TfiEmail /></Link>
              <Link to="" className="bg-white p-2 text-center rounded-full text-xl hover:bg-black hover:text-white font-bold"><FaTwitter /></Link>
            </div>
            <motion.div
              initial={{ scale: 0 }} animate={{ scale: 1 }}
            >
              <h1 className="text-white font-semibold text-xl leading-5">Let's <span className="leading-5 text-xl text-black font-semibold">taik</span></h1>
              <p className="py-4 font-sans-serif">To request aquout or want to meet up for build projects, contact me directly or fill out form and i will get back to soon.</p>
              <div>
                <Toaster position="top-center" />
                <form className="" onSubmit={sendEmail}>
                    <label className="block text-gray-700 font-semibold">Full Name</label>
                    <div className="relative flex items-center">
                      <User className="absolute left-3 text-gray-500" size={18} />
                      <input
                        type="text"
                        name="name"
                        className="w-[280px]  pl-10 pr-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                      />
                    </div>
                    <div className="relative">
                      <label className="block text-gray-700 font-semibold">Email</label>
                      <div className="relative flex items-center">
                        <Mail className="absolute left-3 text-gray-500" size={18} />
                        <input
                          type="email"
                          name="email"
                          className="w-[280px]  pl-10 pr-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                          required
                        />
                      </div>
                    </div>
                    <label className="block text-gray-700 font-semibold">Message</label>
                    <textarea
                      name="message"
                      rows="3"
                      className="w-[280px] p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                      required
                    ></textarea>
                    <button
                      type="submit"
                      className="w-[280px] flex justify-center items-center my-2 gap-2 bg-blue-500 text-white font-bold py-2 rounded-lg shadow-md hover:bg-blue-600 transition disabled:opacity-50"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Message"}
                      <Send size={18} />
                    </button>
                </form>
              </div>
            </motion.div>
            <div className="mt-14">
              <motion.img
                initial={{ scale: 0 }} animate={{ scale: 1 }}
                src={paster} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact