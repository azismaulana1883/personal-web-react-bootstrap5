import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./Homepage/Headers/Navbar"
import About from "./pages/About"
import Footer from "./Homepage/Headers/Footer"
import Portfolio from "./pages/Portfolio"

function App() {

  return (
    <>
      <BrowserRouter>
      <section id='headers-nav'>
                <Navbar/>
            </section>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
        </Routes>
        <section id='footer'>
                <Footer/>
            </section>
      </BrowserRouter>
    </>
  )
}

export default App
