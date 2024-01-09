import React from "react";
import { tabs } from "../data";
import { useDarkMode } from "../context/ModeContext";

const Navbar : React.FC =()=>{

    const {themeMode} = useDarkMode();

    return(
        <nav className="flex flex-row w-[50%]">
            <ul className="flex flex-row w-[100%]">
                {tabs.map((tab, index)=>(
                    <li 
                        key={index}
                        className={`${themeMode === 'darkMode' ? 'bg-slate-900 text-white' : themeMode === 'neonMode' ? 'bg-[#6A1B9A] text-[#EA80FC]' : 'bg-white text-black' }`}
                    >
                        <a 
                            href="/"
                            className={`p-1 transition-all hover:bg-gray-100 
                                hover:underline hover:underline-offset-4
                                `}
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