import { useState } from "react";

const SimpleResponsibles = () => {
  const par = "I’m driven by a deep passion for problem-solving and creating intuitive solutions. I thrive in fast-paced environments and love collaborating with diverse teams to build innovative products that make a real difference. Whether it's optimizing existing systems or building something from the ground up, I’m always excited to face new challenges and grow as a developer.";
  const [isResized, setIsResized] = useState(false);

  const toggleText = () => {
    setIsResized(!isResized);
  };
  return (
    <div className="border-2 border-blue-400 rounded-lg p-4 shadow-lg transition-transform duration-300 hover:rotate-3 ">
      <p className="text-lg font-medium font-roboto">
        {isResized ? par : par.slice(0, 200) + " ..."}
      </p>
      <div className="py-2 flex justify-end">
        <button
          onClick={toggleText}
          className="bg-blue-500 text-white font-semibold text-xl px-4 py-2 rounded-md hover:bg-blue-400 transition duration-300"
        >
          View {isResized ? "Less" : "More"}
        </button>
      </div>
    </div>
  )
}

export default SimpleResponsibles