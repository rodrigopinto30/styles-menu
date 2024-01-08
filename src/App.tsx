import Header from "./components/Header";
import Products from "./components/Products";
import Recommended from "./components/Recommended";
import { DarkModeProvider } from "./context/ModeContext";

const App = () => {
  return (
    <DarkModeProvider>
    <div>
      <Header />
      <main className="pl-10 pr-10">
        <Products />
        <Recommended />
      </main>
    </div>
    </DarkModeProvider>
  )
}

export default App
