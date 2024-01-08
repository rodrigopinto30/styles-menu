import Header from "./components/Header";
import Products from "./components/Products";
import Recommended from "./components/Recommended";

const App = () => {
  return (
    <div>
      <Header />
      <main className="pl-10 pr-10">
        <Products />
        <Recommended />
      </main>
    </div>
  )
}

export default App
