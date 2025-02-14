import { useState } from "react"
import abouts from "../managed/Abouts.json"
import { FaQuestion } from "react-icons/fa";
import ChildAbout from "../Component/ChildAbout";

const AboutUs = () => {
  const [contents, setContents] = useState(abouts)
  console.log(contents)
  return (
    <div className="bg-blue-300 mt-24 pt-4">
      <div className="flex justify-center text-3xl text-white absolute top-[85px]  left-2/4 z-20 ">
        <FaQuestion className="border-2 border-black font-bold p-2 rounded-full bg-blue-400 h-10 w-10" />
      </div>
      <div >
        {contents.map((content, index) => (
          <div key={index}>
            <div className="w-11/12 mx-auto">
              <div className={index === 0 && "flex justify-center items-center" }>
                <div className={index === 0 && "bg-yellow-400 h-2 w-[150px] " }></div>

                <h1 className="flex  px-2 py-3 uppercase  font-bold text-2xl">
                  <span>{content.logo}</span>
                  <span className="text-white">{content.m}</span>
                </h1>
                <div className={index === 0 && "bg-pink-700 h-2 w-[150px] " }></div>
              </div>
            </div>


          </div>
        ))}
            <ChildAbout />
      </div>
    </div>
  )
}

export default AboutUs