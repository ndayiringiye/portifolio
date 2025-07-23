import React, { useState, useContext } from "react";
import { globalModelContext } from "../contents/GlobalModelContext";
import { div } from "framer-motion/client";
import { FcBusinessman } from "react-icons/fc";
import { FaUserGraduate } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { TbTimezone } from "react-icons/tb";
import profile from "../../public/images/profile.png"
import IntroductionAbout from "../Component/IntroductionAbout";
import { motion } from "framer-motion";

const AboutUs = () => {
  const { models, setModels } = useContext(globalModelContext);
  return (
    <div>
    <div className="flex flex-col py-4 px-6 bg-blue-400 w-48 gap-6">
      <div className="flex gap-2 capitalize font-bold text-xl">
        <span><FcBusinessman  className="text-gray-800"/></span>
        <h1>about <span className="text-white">me</span> </h1>
      </div>
      <div></div>
      <div className="flex gap-2 capitalize font-bold text-xl">
        <span><FaUserGraduate className="text-gray-800" /></span>
        <h1 className="text-white">education</h1>
      </div>
      <div></div>
      <div className="flex gap-2 capitalize font-bold text-xl">
        <span><IoSettingsSharp className="text-gray-800"/></span>
        <h1 className="text-white">services</h1>
      </div>                     
      <div></div>
      <div className="flex gap-2 capitalize font-bold text-xl">
        <span><IoLocationSharp  className="text-gray-800"/></span>
        <h1 className="text-white">location</h1>
      </div>
      <div></div>
      <div className="flex gap-2 capitalize font-bold text-xl">
        <span><TbTimezone  className="text-gray-800"/></span>
        <h1 className="text-white">time zone</h1>
      </div>
      <div className="flex justify-end align-end ">
        <img src={profile} alt="profile" className="w-full h-full object-fit-cover border-3 border-gray-100" />
      </div>
    </div>
    <IntroductionAbout />
    </div>
  );
};

export default AboutUs;
