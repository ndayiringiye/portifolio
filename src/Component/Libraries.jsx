
const Libraries = ({soft, ex, mongo, react, tail, sl, imgt, imgr, imgsl, imgmo, imgex }) => {
    return (
        <div>
              <h1>{soft}</h1>
            <div className="flex gap-4 my-4 items-center">
                <img src={imgex} alt="github" className="w-16 h-16 rounded-full bg-white p-2 items-center" />
                <p className=" font-roboto font-medium capitalize text-2xl">{ex}</p>
            </div>
            <div className="flex items-center capitalize font-medium  gap-4 my-4 ">
                <img className="w-16 h-16 rounded-full bg-white p-2 items-center" src={imgmo} alt="html" />
                <p className=" font-roboto text-2xl">{mongo}</p>
            </div>
            <div className="flex items-center capitalize font-medium  gap-4 my-4">
                <img className="w-16 h-16 rounded-full bg-white p-2 items-center" src={imgr} alt="figma" />
                <p className=" font-roboto text-2xl">{react}</p>
            </div>
            <div className="flex items-center capitalize font-medium  gap-4 my-4">
                <img className="w-16 h-16 rounded-full bg-white p-2 items-center" src={imgt} alt="css" />
                <p className=" font-roboto text-2xl">{tail}</p>
            </div>
            <div className="flex items-center capitalize font-medium  gap-4 my-4">
                <img src={imgsl} alt="javascript" className="w-16 h-16 rounded-full bg-white p-2 items-center" />
                <p className=" font-roboto text-2xl">{sl}</p>
            </div>


        </div>
    )
}

export default Libraries