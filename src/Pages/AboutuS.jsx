import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  GraduationCap,
  Settings,
  MapPin,
  Clock,
  Code,
  Server,
  Cloud,
} from "lucide-react";
import profile from "../../public/images/profile.png";
import LocationMap from "../Component/LocationMap";
const ProfileImage = () => (
  <div className="w-32 h-32 rounded-full border-4 border-blue-500 overflow-hidden">
    <img
      src={profile}
      alt="profile"
      className="w-full h-full object-cover"
    />
  </div>
);


const Card = ({ children, icon, title, className = "" }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${className}`}
  >
    <div className="p-6">
      <div className="flex items-center mb-4">
        <div className="p-3 bg-blue-100 rounded-lg text-blue-600 mr-4">{icon}</div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <div className="text-gray-600 leading-relaxed">{children}</div>
    </div>
  </motion.div>
);

const IntroductionAbout = () => {
  const par =
    "Hi, I'm Ndayiringiye David, a passionate Full-Stack Developer with 1 year of experience building robust, scalable, and user-friendly applications. I specialize in both front-end and back-end development, leveraging the latest technologies to create seamless digital experiences.";

  return (
    <div className="flex-1 bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-8 hover:border-2 hover:border-blue-500 transition-all duration-300">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-4">About Me</h1>
          <p className="text-lg text-gray-600 font-['Open_Sans'] leading-relaxed">
            {par}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-['Open_Sans'] font-semibold">
          <Card title="Backend Engineering" icon={<Server size={24} />}>
            I specialize in building robust APIs using Node.js, Express, Java,
            Python, and MongoDB. My experience includes designing scalable
            backend architectures, implementing secure authentication, and
            integrating databases to deliver high-performance solutions.
          </Card>
          <Card title="Front-end Engineering" icon={<Code size={24} />}>
            Experience in HTML, CSS, Tailwind CSS, React.js, and PHP. I build
            responsive and interactive user interfaces, ensuring seamless user
            experiences across devices with modern UI/UX principles.
          </Card>
          <Card title="UI Design & Deployment" icon={<Cloud size={24} />}>
            Experienced in building intuitive interfaces using Figma and modern
            design principles. I focus on creating user-centric designs that
            enhance usability and accessibility, ensuring a cohesive look across
            applications.
          </Card>
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label, active, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`flex items-center p-4 rounded-lg cursor-pointer transition-colors ${
      active ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-blue-100"
    }`}
  >
    <span className="mr-3 text-xl">{icon}</span>
    <span className="font-medium">{label}</span>
  </motion.div>
);

const TabButton = ({ icon, label, active, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className={`flex flex-col items-center justify-center p-3 rounded-lg transition-colors text-xs sm:text-sm min-w-0 flex-1 ${
      active
        ? "bg-blue-500 text-white shadow-lg"
        : "bg-white text-gray-700 hover:bg-blue-50 border border-gray-200"
    }`}
  >
    <span className="text-lg mb-1">{icon}</span>
    <span className="font-medium truncate w-full text-center">{label}</span>
  </motion.button>
);

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", icon: <User />, label: "About Me" },
    { id: "education", icon: <GraduationCap />, label: "Education" },
    { id: "services", icon: <Settings />, label: "Services" },
    { id: "location", icon: <MapPin />, label: "Location" },
    { id: "timezone", icon: <Clock />, label: "Time Zone" },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-8 hover:border-2 hover:border-blue-500 transition-all duration-300">
              <div className="p-6">
                <div className="hidden sm:flex flex-col items-center mb-8">
                  <div className="relative mb-4">
                    <ProfileImage />
                    <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-2">
                      <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">
                    Ndayiringiye David
                  </h2>
                  <p className="text-blue-600">Full-Stack Developer</p>
                </div>

                <div className="space-y-2">
                  {tabs.map((tab) => (
                    <SidebarItem
                      key={tab.id}
                      icon={tab.icon}
                      label={tab.label}
                      active={activeTab === tab.id}
                      onClick={() => setActiveTab(tab.id)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="lg:hidden mb-6">
              <div className="bg-gray-50 p-2 rounded-xl">
                <div className="flex gap-1 overflow-x-auto">
                  {tabs.map((tab) => (
                    <TabButton
                      key={tab.id}
                      icon={tab.icon}
                      label={tab.label}
                      active={activeTab === tab.id}
                      onClick={() => setActiveTab(tab.id)}
                    />
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === "about" && <IntroductionAbout />}
              {activeTab === "education" && (
                <div className="bg-white rounded-xl shadow-lg p-8 hover:border-2 hover:border-blue-500 transition-all duration-300">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Education
                  </h2>
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-500 pl-6 py-2">
                      <h3 className="text-xl font-semibold text-gray-800">
                        Bachelor's in Computer Science
                      </h3>
                      <p className="text-gray-600">
                        University of the People, 2018-2022
                      </p>
                      <p className="text-gray-500 mt-2">
                        Specialized in Software Engineering and Web Development
                      </p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-6 py-2">
                      <h3 className="text-xl font-semibold text-gray-800">
                        Advanced Web Development
                      </h3>
                      <p className="text-gray-600">Online Certification, 2022</p>
                      <p className="text-gray-500 mt-2">
                        Completed intensive course on modern web technologies
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "services" && (
                <div className="bg-white rounded-xl shadow-lg p-8 hover:border-2 hover:border-blue-500 transition-all duration-300">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Services
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Web Development
                      </h3>
                      <p className="text-gray-600">
                        Custom web applications built with modern technologies
                      </p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        UI/UX Design
                      </h3>
                      <p className="text-gray-600">
                        Beautiful, intuitive interfaces that users love
                      </p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        API Development
                      </h3>
                      <p className="text-gray-600">
                        Robust backend services and integrations
                      </p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Consulting
                      </h3>
                      <p className="text-gray-600">
                        Expert advice on architecture and best practices
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "location" && (
                <div className="bg-white rounded-xl shadow-lg p-8 hover:border-2 hover:border-blue-500 transition-all duration-300">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Location
                  </h2>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="mr-2 text-blue-500" size={20} />
                    <span>Kigali, Kimironko, Rwanda</span>
                  </div>
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <LocationMap />
                  </div>
                  <div className="text-gray-600">
                    <p>
                      I'm based in Kimironko, a vibrant district in Kigali,
                      Rwanda's capital city.
                    </p>
                    <p className="mt-2">
                      Kigali is known for its clean streets, beautiful hills,
                      and growing tech community.
                    </p>
                  </div>
                </div>
              )}
              {activeTab === "timezone" && (
                <div className="bg-white rounded-xl shadow-lg p-8 hover:border-2 hover:border-blue-500 transition-all duration-300">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Timezone
                  </h2>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Clock className="mr-2 text-blue-500" size={20} />
                    <span>Central Africa Time (CAT) - UTC+2</span>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Working Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 5:00 PM
                    </p>
                    <p className="text-gray-600 mt-2">
                      Available for meetings and collaboration during these
                      hours.
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
