import Header from "./components/Header";
import Products from "./components/Products";
import Recommended from "./components/Recommended";
import { useDarkMode } from "./context/ModeContext";

const App = () => {

  const {themeMode} = useDarkMode();

  return (
      
      <div 
          className={`${themeMode === 'darkMode' ? 'bg-slate-900' : themeMode === 'neonMode' ? 'bg-[#6A1B9A]' : 'bg-white'}`}
        >
        <Header />
        <main className="pl-10 pr-10">
          <Products />
          <Recommended />
        </main>
      </div>
      
  )
}

export default App
