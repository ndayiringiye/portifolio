import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Top Section */}
      <div className="w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700">
        
        {/* About Me */}
        <div>
          <h1 className="text-4xl font-bold font-serif uppercase">
            Bio<span className="text-blue-400">Status</span>
          </h1>
          <p className="mt-4 text-gray-400 leading-relaxed">
            I am a **Full-Stack Developer** specializing in the **MEN stack (MongoDB, Express, Node.js, React.js)**.
            Passionate about building scalable applications and solving real-world problems with technology.
          </p>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-semibold">Contact Me</h2>
          <ul className="mt-4 space-y-3 text-gray-400">
            <li className="flex items-center">
              <FaPhone className="text-blue-400 mr-3" /> +250 123 456 789
            </li>
            <li className="flex items-center">
              <FaEnvelope className="text-blue-400 mr-3" /> david@example.com
            </li>
            <li className="flex items-center">
              <FaMapMarkerAlt className="text-blue-400 mr-3" /> Kigali, Rwanda
            </li>
          </ul>
        </div>

        {/* Help Center & Social Media */}
        <div>
          <h2 className="text-2xl font-semibold">Help & Support</h2>
          <ul className="mt-4 space-y-3 text-gray-400">
            <li><a href="#" className="hover:text-blue-400 transition duration-300">FAQ</a></li>
            <li><a href="#" className="hover:text-blue-400 transition duration-300">Support</a></li>
            <li><a href="#" className="hover:text-blue-400 transition duration-300">Terms & Conditions</a></li>
          </ul>
          {/* Social Media Icons */}
          <div className="flex space-x-5 mt-5">
            <a href="#" className="text-blue-400 text-2xl hover:text-white transition duration-300"><FaFacebook /></a>
            <a href="#" className="text-blue-400 text-2xl hover:text-white transition duration-300"><FaTwitter /></a>
            <a href="#" className="text-blue-400 text-2xl hover:text-white transition duration-300"><FaLinkedin /></a>
          </div>
        </div>

      </div>

      {/* Copyright Section */}
      <div className="text-center py-4 text-gray-400">
        <h2>&copy; {new Date().getFullYear()} All rights reserved | Powered by **David Ndayiringiye**</h2>
      </div>
    </footer>
  );
};

export default Footer;
