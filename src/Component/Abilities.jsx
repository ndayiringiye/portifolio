import { useState } from "react";
import contents from "../managed/Abouts.json";
const Abilities = () => {
    const [items, setItems] = useState(contents);
    console.log(items)
  return (
    <div>
        <div className="py-4">
            {items && items.map(item =>(
                <div>
                    <p className="text-lg font-roboto font-semibold opacity-2 text-gray-700">{item.describe}</p>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Abilities