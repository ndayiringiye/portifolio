const LastAbout = ({name, git, start, fig, design, sc ,css, jav, js, back , node, bd, mongo , keep , tml}) => {
    return (
        <div>
            <div>
                    <div>
                        <h2>{name}</h2>
                        <div className="flex gap-4 my-4 items-center">
                            <img src={keep} alt="github" className="w-16 h-16 rounded-full bg-white p-2 items-center"/>
                            <p className=" font-roboto font-medium capitalize text-2xl">{git}</p>
                        </div>
                        <div className="flex items-center capitalize font-medium shadow-sm gap-4 my-4 ">
                            <img className="w-16 h-16 rounded-full bg-white p-2 items-center" src={tml} alt="html" />
                            <p className=" font-roboto text-2xl">{start}</p>
                        </div>
                        <div className="flex items-center capitalize font-medium shadow-sm gap-4 my-4">
                            <img className="w-16 h-16 rounded-full bg-white p-2 items-center" src={fig} alt="figma" />
                            <p className=" font-roboto text-2xl">{design}</p>
                        </div>
                        <div className="flex items-center capitalize font-medium shadow-sm gap-4 my-4">
                            <img className="w-16 h-16 rounded-full bg-white p-2 items-center" src={sc} alt="css" />
                            <p className=" font-roboto text-2xl">{css}</p>
                        </div>
                        <div className="flex items-center capitalize font-medium shadow-sm gap-4 my-4">
                            <img src={jav} alt="javascript"  className="w-16 h-16 rounded-full bg-white p-2 items-center"/>
                            <p className=" font-roboto text-2xl">{js}</p>
                        </div>
                        <div className="flex items-center capitalize font-medium shadow-sm gap-4 my-4">
                            <img className="w-16 h-16 rounded-full bg-white p-2 items-center" src={back} alt="node js" />
                            <p className=" font-roboto text-2xl">{node}</p>
                        </div>
                        <div className="flex items-center  shadow-sm gap-4 my-4">
                            <img className="w-16 h-16 rounded-full bg-white p-2 items-center" src={bd} alt="mongodb" />
                            <p className="capitalize font-medium font-roboto text-2xl">{mongo}</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default LastAbout