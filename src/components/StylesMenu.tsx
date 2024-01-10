import React, {useState} from "react";
import { useDarkMode } from "../context/ModeContext";

const StylesMenu : React.FC =()=>{

    const [selected, setSelected] = useState<boolean>(false);
    const [isHovered, setIsHovered] = useState(false);

    const {themeMode, toggleThemeMode} = useDarkMode();

    return(
        <div className={`z-10 fixed bottom-[10%] right-[50%] bg-gray-100 opacity-75 rounded-full xl:w-[4%] lg:w-[7%] md:w-[9%] w-[12%] h-[7%] cursor-pointer
            border-2 border-white transition-all
            ${isHovered ? 'hover:bg-white hover:border-red-100 hover:xl:right-[20%] hover:opacity-100 hover:xl:w-[60%] hover:w-[80%] hover:right-[12%] hover:transition-all' : '' }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`flex flex-row w-full h-full bg-transparent rounded-full 
                justify-center items-center ${themeMode === 'darkMode' ? 'bg-slate-500' 
                    : themeMode === 'neonMode' ? "bg-slate-800"
                        : 'bg-gray-100 '}`
                }
            >
                <span className={`${isHovered ? 'hidden' : 'block'}`}>
                    icono
                </span>

                <ul className={`flex flex-row w-full justify-around ${isHovered ? 'block' : 'hidden'}`}>
                    <li 
                        className="bg-[#1e293b] text-white p-1 border-2 border-white rounded-md">
                            <button type="button" onClick={()=>toggleThemeMode('darkMode')}>
                             Dark Mode </button>
                        </li>
                    <li 
                        className="bg-white text-blue-400 p-1 border-2 border-blue-400 rounded-md"
                    >
                        <button type="button" onClick={()=>toggleThemeMode('lightMode')}
                        >Light Mode</button>    
                    </li>
                    <li 
                        className="drop-shadow-neon-drop-shadow text-slate-900 p-1 border-2 border-green-600 rounded-md"
                    >
                        <button type="button" 
                            onClick={()=>toggleThemeMode('neonMode')}
                        > Neon Mode </button> 
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default StylesMenu;