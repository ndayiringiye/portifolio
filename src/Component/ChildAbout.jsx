import { useState } from "react";
import contents from "../managed/Abouts.json";
import Checklist from "./Checklist";

const ChildAbout = () => {
  const [items, setItems] = useState(contents);

  console.log(items);

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-10 w-11/12 mx-auto sm:grid-cols-1 md:grid-cols-2">
        {items &&
          items.map((item, index) => (
            <div key={index}>
              <div>
                {item.image && (
                  <img
                    src={item.image}
                    alt="my identification"
                    className="sm:w-full rotate-0 sm:h-70 lg:w-[200px] rounded-md lg:h-40 md:w-[300px] md:h-50 md:origin-center md:rotate-45 my-3  "
                  />
                )}
              </div>
              <div>
                <h1 className="text-2xl font-roboto font-bold text-black">
                  {item.me}
                </h1>
                <p className={index >= 1 && index <= 26 ? "text-2xl font-roboto font-bold text-black" : ""}>
                  {item.description}
                </p>
                <p className="my-3">{item.sub}</p>
              </div>
            </div>
          ))}
      </div>
      <div className="w-11/12 mx-auto">
        <Checklist />
      </div>
    </div>
  );
};

export default ChildAbout;
