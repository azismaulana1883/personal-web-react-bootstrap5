import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./Homepage/Headers/Navbar"
import About from "./pages/About"
import Footer from "./Homepage/Headers/Footer"
import Portfolio from "./pages/Portfolio"
import Pengalaman from "./pages/Pengalaman"
import ArtikelDetail from "./Content/ArtikelDetail"

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
          <Route path="/pengalaman" element={<Pengalaman/>} />
          <Route path="/artikel/:ArtikelId" element={<ArtikelDetail/>} />
        </Routes>
        <section id='footer'>
                <Footer/>
            </section>
      </BrowserRouter>
    </>
  )
}

export default App
