import { useState, useEffect, useRef } from 'react';
import { Progress, Carousel, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import figma from "../../public/images/figma.png";
import html from "../../public/images/html.png";
import css from "../../public/images/css.png";
import express from "../../public/images/express.png";
import tailwind from "../../public/images/tailwind.png";
import react from "../../public/images/react.png";
import node from "../../public/images/node.png";
import mongodb from "../../public/images/mongodb.png";
import mongoose from "../../public/images/mongose.png";
import javascript from "../../public/images/javascript.png";
import git from "../../public/images/git.png";
import java from "../../public/images/java.png";

import bg1 from "../../public/images/bg1.png";
import bg2 from "../../public/images/bg2.png";
import bg3 from "../../public/images/bg3.png";
// import { Progress, Flex } from 'antd';

const initialSkillLevels = [
  { name: "Figma", img: figma, level: 85 },
  { name: "HTML", img: html, level: 95 },
  { name: "CSS", img: css, level: 90 },
  { name: "JavaScript", img: javascript, level: 88 },
  { name: "Tailwind CSS", img: tailwind, level: 92 },
  { name: "React.js", img: react, level: 90 },
  { name: "Node.js", img: node, level: 85 },
  { name: "Express.js", img: express, level: 80 },
  { name: "MongoDB", img: mongodb, level: 75 },
  { name: "Mongoose", img: mongoose, level: 70 },
  { name: "Git", img: git, level: 80 },
  { name: "Java", img: java, level: 65 },
];

const initialBackgroundImages = [bg1, bg2, bg3];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  const [skillLevels, setSkillLevels] = useState(initialSkillLevels);
  const [backgroundImages, setBackgroundImages] = useState(initialBackgroundImages);
  const [visibleSkills, setVisibleSkills] = useState(skillLevels.slice(0, 5));
  const skillsRef = useRef(null);

  const [animated, setAnimated] = useState(false);

  const filteredSkills = {
    frontend: skillLevels.filter(skill =>
      ['Figma', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'React.js'].includes(skill.name)
    ),
    backend: skillLevels.filter(skill =>
      ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Java'].includes(skill.name)
    ),
    tools: skillLevels.filter(skill =>
      ['Git'].includes(skill.name)
    )
  };
  const conicColors = {
    '0%': '#87d068',
    '50%': '#ffe58f',
    '100%': '#ffccc7',
  };

  const twoColors = {
    from: '#108ee9',
    to: '#87d068',
  };

  useEffect(() => {
    const handleScroll = () => {
      if (skillsRef.current && !animated) {
        const top = skillsRef.current.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          setAnimated(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animated]);
  const carouselRef = useRef(null);


  return (
    <div
      className="w-full py-16 relative overflow-hidden"
      ref={skillsRef}
    >
      <div className="absolute inset-0 z-0 opacity-20">
        <Carousel
          autoplay
          dots={false}
          effect="fade"
          ref={carouselRef}
        >
          {backgroundImages.map((bg, index) => (
            <div key={index} className="h-full w-full">
              <img
                src={bg}
                alt={`Background ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2">
        <Button
          type="text"
          icon={<LeftOutlined className="text-white text-2xl" />}
          onClick={() => carouselRef.current?.prev()}
          className="bg-black bg-opacity-30 hover:bg-opacity-50"
        />
      </div>
      <div className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2">
        <Button
          type="text"
          icon={<RightOutlined className="text-white text-2xl" />}
          onClick={() => carouselRef.current?.next()}
          className="bg-black bg-opacity-30 hover:bg-opacity-50"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4-">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-blue-500">
          My Skills
        </h2>
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg bg-gray-100 p-1">
            <button
              onClick={() => setActiveTab('frontend')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${activeTab === 'frontend' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
            >
              Frontend
            </button>
            <button
              onClick={() => setActiveTab('backend')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${activeTab === 'backend' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
            >
              Backend
            </button>
            <button
              onClick={() => setActiveTab('tools')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${activeTab === 'tools' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
            >
              Tools
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {filteredSkills[activeTab].map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white bg-opacity-90 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative group">
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-20 h-20 object-contain mb-4 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-black bg-opacity-70 text-white text-sm px-2 py-1 rounded">
                    {skill.level}%
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{skill.name}</h3>
              
              <div className="w-full">
                <Progress
                  percent={animated ? skill.level : 0}
                  strokeColor={skill.level > 80 ? twoColors : conicColors}
                  strokeWidth={10}
                  showInfo={false}
                  className="skill-progress"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;