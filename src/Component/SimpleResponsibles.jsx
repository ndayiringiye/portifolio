import { useState } from "react";

const SimpleResponsibles = () => {
     const par ="I’m driven by a deep passion for problem-solving and creating intuitive solutions. I thrive in fast-paced environments and love collaborating with diverse teams to build innovative products that make a real difference. Whether it's optimizing existing systems or building something from the ground up, I’m always excited to face new challenges and grow as a developer.";
        const [isResized, setIsResized] = useState(false);

        const toggleText = () => {
            setIsResized(!isResized); 
        };
  return (
    <div className="border-2 border-b-blue-600 rounded-sm py-2 px-3">
         <p className="text-lx font-medium font-roboto">{isResized ? par : par.slice(0, 200) + " ..."}</p>
         <div className="py-2 flex justify-end px-4">
         <button onClick={toggleText}
            className="bg-blue-500 text-white font-semibold text-xl p-2 rounded-md"
            >
            view    {isResized ? "less" : "more"}
            </button>
         </div>
    </div>
  )
}

export default SimpleResponsibles