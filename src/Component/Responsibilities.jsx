import { useState } from "react";
import SimpleResponsibles from "./SimpleResponsibles";
import Title from "./Title";
function Responsibilities() {
    const par = "I design and implement dynamic web applications using a modern tech stack, combining JavaScript, HTML, and CSS for the front-end with Node.js, Express, and MongoDB for the back-end. I’m also proficient with databases (SQL & NoSQL), API development, and version control systems like Git, ensuring that my projects are efficient, maintainable, and scalable.";
    const [isResized, setIsResized] = useState(false);
    const toggleText = () => {
        setIsResized(!isResized);
    };
    return (
        <div className="py-3">
            <Title />
            <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 iphone:grid-cols-1  gap-10 w-11/12 mx-auto ">
                <div className="border-2 border-blue-400 rounded-lg p-4 shadow-lg transition-transform duration-300 hover:rotate-3">
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
                <div>
                    <SimpleResponsibles />
                </div>
            </div>
        </div>
    );
}
export default Responsibilities;
