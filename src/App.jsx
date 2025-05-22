import About from "./components/About/About"
import Skills from "./components/Skills/Skills"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Projects/Projects"

function App() {


  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App
