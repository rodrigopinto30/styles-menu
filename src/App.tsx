import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
import Recommended from "./components/Recommended";
import { useDarkMode } from "./context/ModeContext";

const App = () => {

  const {themeMode} = useDarkMode();

  return (
      
      <div 
          className={`${themeMode === 'darkMode' ? 'bg-background-dark' : themeMode === 'neonMode' ? 'bg-black' : 'bg-white'}`}
        >
        <Header />
        <main className="h-fit pl-10 pr-10">
          <Products />
          <Recommended />
        </main>
        <Footer />
      </div>
      
  )
}

export default App
