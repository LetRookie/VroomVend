import { Routes, Route } from "react-router-dom"
import './assets/styles/styles.css'
import Home from "./components/home/Home"
import LastAdded from "./components/last-added/LastAdded"
import Footer from "./components/footer/Footer"


function App() {

  return (
    <>
    <Home />
    <LastAdded />
    <Footer/>
    </>
  )
}

export default App
