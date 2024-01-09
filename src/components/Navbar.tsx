import React from "react";
import { tabs } from "../data";
import { useDarkMode } from "../context/ModeContext";

const Navbar : React.FC =()=>{

    const {themeMode} = useDarkMode();

    return(
        <nav className="flex flex-row w-[50%]">
            <ul className="flex flex-row w-[100%] gap-5">
                {tabs.map((tab, index)=>(
                    <li 
                        key={index}
                    >
                        <a 
                            href="/"

                        className={`transition-all ${themeMode === 'darkMode' ? 'text-text-dark hover:underline hover:underline-offset-4' 
                        : themeMode === 'neonMode' ? 'text-white drop-shadow-neon-drop-shadow  hover:underline hover:underline-offset-4' 
                            : 'bg-white text-black hover:underline hover:underline-offset-4' }`}
                            > 
                            {tab}
                        </a> 
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar;