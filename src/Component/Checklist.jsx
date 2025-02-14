import { useState } from "react";
import contents from "../managed/Abouts.json";
import Abilities from "./Abilities";

const Checklist = () => {
  const [items, setItems] = useState(contents);
        console.log(items)
  return (
    <div>
        <div>
            {items && items.map((item , index)=>(
              <div key={index}>
                <div>
                    <h1 className=" text-2xl front-roboto font-bold text-black">{item.title}</h1>
                    <p>{item.explain}</p>
                </div>
                </div>
          ))}
        </div>
         <Abilities />
    </div>
  )
}

export default Checklist