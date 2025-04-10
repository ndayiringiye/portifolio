import figma from "../../public/images/figma.png";
import html from "../../public/images/html.png";
import css from "../../public/images/css.png";
import express  from "../../public/images/express.png";
import tailwind from "../../public/images/tailwind.png";
import react from "../../public/images/react.png";
import node from "../../public/images/node.png";
import mongodb from  "../../public/images/mongodb.png";
import mongoose from "../../public/images/mongose.png";
import javascript from "../../public/images/javascript.png"

const skills = [
  { name: "Figma", img: figma },
  { name: "HTML", img: html },
  { name: "CSS", img: css },
  { name: "JavaScript", img: javascript },
  { name: "Tailwind CSS", img: tailwind },
  { name: "React.js", img: react },
  { name: "Node.js", img: node },
  { name: "Express.js", img: express },
  { name: "MongoDB", img: mongodb },
  { name: "Mongoose", img: mongoose },
];

const Skills = () => {
  return (
    <div className="w-11/12 mx-auto py-10">
      <h2 className="text-3xl  font-bold text-center mb-6">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`border-2 border-blue-400 p-4 rounded-lg flex flex-col items-center animate-bounce-smooth`}
            style={{ animationDelay: `${index * 0.2}s` }} 
          >
            <img src={skill.img} alt={skill.name} className="w-16 h-16" />
            <p className="mt-2 font-semibold text-gray-700">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
