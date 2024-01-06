import Footer from "./components/Footer"
import Header from "./components/Header"
import Products from "./components/Products"

const App = () => {
  return (
    <div>
      <Header />
      <main className="pl-10 pr-10">
        <Products />
        <section> 3 Recomendados</section>
      </main>
      <Footer />
    </div>
  )
}

export default App
