import { useState } from "react";
import contents from "../managed/Abouts.json";

const ChildAbout = () => {
  const [items, setItems] = useState(contents);

  console.log(items)
  return (
    <div>
      <div  className="flex justify-center flex-row-reverse gap-10 w-8/12 mx-auto">
        {items && items.map((item, index) => (
          <div key={index}>
            
            <div>
            <img src={item.image} alt="my identification"  />
            </div>
            <div>
              <h1>{item.me}</h1>
              <p>{item.description}</p>
              <p className="my-3">{item.sub}</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default ChildAbout