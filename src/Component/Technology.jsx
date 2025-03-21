import React from "react";

const skills = [
  { name: "Figma", img: "src/images/figma.png" },
  { name: "HTML", img: "src/images/html.png" },
  { name: "CSS", img: "src/images/css.png" },
  { name: "JavaScript", img: "src/images/javascript.png" },
  { name: "Tailwind CSS", img: "src/images/tailwind.png" },
  { name: "React.js", img: "src/images/react.png" },
  { name: "Node.js", img: "src/images/node.png" },
  { name: "Express.js", img: "src/images/express.png" },
  { name: "MongoDB", img: "src/images/mongodb.png" },
  { name: "Mongoose", img: "src/images/mongose.png" },
];

const Skills = () => {
  return (
    <div className="w-11/12 mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6">My Skills</h2>
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
