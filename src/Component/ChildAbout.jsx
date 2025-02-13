import { useState } from "react";
import contents from "../managed/Abouts.json";
import Checklist from "./Checklist";

const ChildAbout = () => {
  const [items, setItems] = useState(contents);

  console.log(items)
  return (
    <div>
      <div className="grid grid-cols-2 gap-x-10 w-11/12 mx-auto">
        {items && items.map((item, index) => (
          <div key={index} >
            <div>
              {item.image && (
                <img
                  src={item.image}
                  alt="my identification"
                  className="w-[200] h-40 origin-center rotate-45 my-3"
                />
              )}
            </div>
            <div>
              <h1>{item.me}</h1>
              <p>{item.description}</p>
              <p className="my-3">{item.sub}</p>
            </div>
          </div>
        ))}
         <div>
           <Checklist />
         </div>
      </div>
    </div>
  )
}

export default ChildAbout