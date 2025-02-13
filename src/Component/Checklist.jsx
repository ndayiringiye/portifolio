import { useState } from "react";
import contents from "../managed/Abouts.json";

const Checklist = () => {
  const [items, setItems] = useState(contents);
        console.log(items)
  return (
    <div>
        <div>
            {items && items.map(item =>{
                <div>
                    <h1>{item.title}</h1>
                    <p>{item.explain}</p>
                </div>
            })}
        </div>
      
    </div>
  )
}

export default Checklist