import { footerItems } from '../data';
import { useDarkMode } from '../context/ModeContext';

const Footer = () => {

  const { themeMode } = useDarkMode();

  return (
    <footer className='grid grid-cols-3 gap-3 pt-[10%] pb-10 text-center'>
      {footerItems.map((item, index) =>(
          <a 
            key={index}
            href='/'
            className={`text-sm font-thil transition-all hover:underline hover:underline-offset-2
            ${themeMode === 'darkMode' ? 'text-text-dark hover:text-white'  
            : themeMode === 'neonMode' ? 'text-white drop-shadow-neon-drop-shadow hover:text-blue-300' 
            : 'text-gray-500 hover:text-gray-800'}
            `}
            >{item}</a>
      ))}             
    </footer>
  )
}

export default Footer