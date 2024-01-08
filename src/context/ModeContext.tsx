import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type ThemeMode = 'lightMode' | 'darkMode' | 'neonMode';

interface DarkModeContextProps {
    themeMode: ThemeMode;
    toggleThemeMode: (mode: ThemeMode)=> void;
}

const DarkModeContext = createContext<DarkModeContextProps | undefined>(undefined);

interface DarKModeProviderProps {
    children: ReactNode;
}

export const DarkModeProvider: React.FC<DarKModeProviderProps> = ({children})=>{
    
    const storedThemeMode = localStorage.getItem('themeMode') as ThemeMode | null;
    const [themeMode, setThemeMode] = useState<ThemeMode>(storedThemeMode || 'lightMode');

    useEffect(() =>{
        localStorage.setItem('themeMode', themeMode);
    },[themeMode]);

    const toggleThemeMode =(mode: ThemeMode)=>{
        setThemeMode(mode);
    }
    


    return (
        <DarkModeContext.Provider value={{themeMode, toggleThemeMode}}>
            {children}
        </DarkModeContext.Provider>
    )
};

export const useDarkMode = () => {
    const context = useContext(DarkModeContext);
    if (!context) {
      throw new Error('error');
    }
    return context;
  };