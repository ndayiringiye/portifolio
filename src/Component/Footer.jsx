import { FaEnvelope, FaMapMarkerAlt, FaPhone,  } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import instagram from "../../public/images/image copy.png"
const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700">
        <div>
          <h1 className="text-3xl font-bold font-serif uppercase">
            Bio<span className="text-blue-400">Status</span>
          </h1>
          <p className="mt-4 text-gray-400 leading-relaxed">
            I am a **Full-Stack Developer** specializing in the **MEN stack (MongoDB, Express, Node.js
            Passionate about building scalable applications and solving real-world problems with technology.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Contact Me</h2>
          <ul className="mt-4 space-y-3 text-gray-400">
            <li className="flex items-center">
              <FaPhone className="text-blue-400 mr-3" /> +250 791 613 1891
            </li>
            <li className="flex items-center">
              <FaEnvelope className="text-blue-400 mr-3" /> ndayiringiyedavid394@gmail.com
            </li>
            <li className="flex items-center">
              <FaMapMarkerAlt className="text-blue-400 mr-3" /> Kigali, Rwanda
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Help & Support</h2>
          <ul className="mt-4 space-y-3 text-gray-400">
            <li><a href="#" className="hover:text-blue-400 transition duration-300">FAQ</a></li>
            <li><a href="#" className="hover:text-blue-400 transition duration-300">Support</a></li>
            <li><a href="#" className="hover:text-blue-400 transition duration-300">Terms & Conditions</a></li>
          </ul>
          <div className="flex space-x-5 mt-5">
          <Link to="https://www.facebook.com/" title="facebook" target="_blank" className="bg-white p-2 text-center rounded-full text-blue-600 "><FaFacebookF /></Link>
          <Link to="https://www.instagram.com/"title="instagram"  target="_blank" className="bg-white p-2 text-center rounded-full  "><img src={instagram} alt="instagram" className="w-4 h-4" /></Link>
          <Link to="https://www.whatsapp.com/" title="whatsapp" target="_blank" className="bg-white p-2 text-center rounded-full text-green-400"><FaSquareWhatsapp /></Link>
          <Link to="https://www.linkedin.com/" title="linkedin" target="_blank" className="bg-white p-2 text-center rounded-full text-blue-800"><FaLinkedinIn /></Link>
          <Link to="https://github.com/ndayiringiye" title="Github" target="_blank" className="bg-white p-2 text-black text-center rounded-full"><BsGithub /></Link>
          </div>
        </div>
      </div>
      <div className="text-center py-4 text-gray-400">
        <h2>&copy; {new Date().getFullYear()} All rights reserved | Powered by **David Ndayiringiye**</h2>
      </div>
    </footer>
  );
};

export default Footer;
