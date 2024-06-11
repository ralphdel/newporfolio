import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Experience from "./Components/Experience/Experience"
import Footer from "./Components/Footer/Footer"
import Home from "./Components/Home/Home"
import NavBar from "./Components/Navbar/NavBar"
import Project from "./Components/Projects/Project"


const App = () => {
  return (
    <>
    <NavBar/>
    <Home/>
    <About/>
    <Experience/>
    <Project/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App