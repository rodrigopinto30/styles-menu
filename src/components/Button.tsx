import React from "react";
import { useDarkMode } from "../context/ModeContext";

const Button : React.FC =()=>{

    const {themeMode} = useDarkMode();

    return(
        <button type="button" className={`border-2 w-[5%] pl-2 pr-2 rounded-md transition-all 
            ${themeMode === 'darkMode' ? 'text-card-dark bg-text-dark border-card-dark hover:bg-background-dark hover:text-text-dark hover:border-text-dark' 
                : themeMode === "neonMode" ? 'text-white drop-shadow-neon-drop-shadow border-purple-200  hover:border-blue-200 hover:text-blue-200 hover:bg-slate-800'
                    : 'bg-blue-600 text-white  border-white hover:text-blue-600 hover:bg-white hover:border-blue-600'}
            `}
        >
            Login
        </button>
    );
}

export default Button;