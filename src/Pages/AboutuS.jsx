import { useState } from "react"
import abouts from "../managed/Abouts.json"
import { FaQuestion } from "react-icons/fa";
const AboutUs = () => {
  const [contents, setContents] = useState(abouts)
  console.log(contents)
  return (
    <div className="bg-blue-300 mt-24 pt-4">
      <div className="flex justify-center text-3xl text-white absolute top-[85px]  left-2/4 ">
        <FaQuestion className="border-2 border-black font-bold p-2 rounded-full bg-blue-400 h-10 w-10" />
      </div>
      <div >
        {contents.map((content, index) => (
          <div>
            <div >
              <div className=""></div>
              <h1
                className="text-center pt-8 uppercase text-3lx font-serif  "
                key={index}>{content.logo} <span className="text-white">{content.m}</span></h1>
              <div  ></div>
            </div>


            <p>{content.describe}</p>
            <h1>{content.title}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutUs