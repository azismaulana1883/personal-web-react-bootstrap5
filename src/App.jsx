import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./Homepage/Headers/Navbar"
import About from "./pages/About"

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
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
