import { useState } from "react";
import contents from "../managed/Abouts.json";
import Abilities from "./Abilities";
import ChildAbility from "./ChildAbility";

const Checklist = () => {
  const [items, setItems] = useState(contents);
        console.log(items)
  return (
    <div>
        <div>
            {items && items.map((item , index)=>(
              <div key={index}>
                <div >
                    <h1 className=" text-2xl font-roboto font-bold text-black">{item.title}</h1>
                    <p className="text-lg font-roboto font-semibold opacity-2 text-gray-700">{item.explain}</p>
                </div>
                </div>
          ))}
        </div>
         <Abilities />
         <ChildAbility />
    </div>
  )
}

export default Checklist