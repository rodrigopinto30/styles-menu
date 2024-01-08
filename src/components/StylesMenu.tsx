import React, {useState} from "react";

const StylesMenu : React.FC =()=>{

    const [selected, setSelected] = useState<boolean>(false);
    const [isHovered, setIsHovered] = useState(false);

    return(
        <div className={`fixed bottom-[10%] right-[50%] bg-gray-100 opacity-75 rounded-full w-[4%] h-[7%] cursor-pointer
            border-2 border-white transition-all
            ${isHovered ? 'hover:bg-white hover:border-red-600 hover:right-[20%] hover:opacity-100 hover:w-[60%] hover:transition-all' : '' }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex flex-row w-full h-full bg-transparent rounded-full flex justify-center items-center">
                <span className={`${isHovered ? 'hidden' : 'block'}`}>
                    icono
                </span>

                <ul className={`flex flex-row w-full justify-around ${isHovered ? 'block' : 'hidden'}`}>
                    <li 
                        className="bg-[#1e293b] text-white p-1 border-2 border-white rounded-md">
                            <button onClick={()=>console.log("dark MOde")}> Dark Mode </button>
                        </li>
                    <li 
                        className="bg-white text-blue-400 p-1 border-2 border-blue-400 rounded-md"
                    >
                        <button onClick={()=>console.log("Light Mode")}>Light Mode</button>    
                    </li>
                    <li 
                        className="bg-red-700 text-white p-1 border-2 border-green-600 rounded-md"
                    >
                            <button onClick={()=>console.log("Navidad Mode")}> Navidad Mode </button> 
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default StylesMenu;