import { useDarkMode } from "../context/ModeContext";

const IconApp =()=>{

    const {themeMode} = useDarkMode();

    return(
        <div className={`border-t-2 border-b-2 font-bold flex flex-row justify-between items-center pr-2 pl-2
            ${themeMode === "darkMode" ? 'text-text-dark border-indigo-500' 
                : themeMode === 'neonMode' ? 'text-white drop-shadow-neon-drop-shadow border-blue-200'
                    : 'text-slate-500 border-blue-500'}
        `}
        >
            Styles App
        </div>
    )
}

export default IconApp;